import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO, decodeJpeg } from "@tensorflow/tfjs-react-native";
import * as ImageManipulator from "expo-image-manipulator";
import { Dimensions } from "react-native";
import { Base64Binary } from "./b64";

const BITMAP_DIMENSION = 150;
const TENSORFLOW_CHANNEL = 3;
const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get("window");
const results = [
  {
    diagnosis: "CNV",
  },
  {
    diagnosis: "DME",
  },
  {
    diagnosis: "DRUSEN",
  },
  {
    diagnosis: "NORMAL",
  },
];

const crop = async (imageData: any, maskDimension: any) => {
  const { uri, width, height } = imageData;
  const cropWidth = maskDimension * (width / DEVICE_WIDTH);
  const cropHeight = maskDimension * (height / DEVICE_HEIGHT);
  const actions = [
    {
      crop: {
        originX: width / 2 - cropWidth / 2,
        originY: height / 2 - cropHeight / 2,
        width: cropWidth,
        height: cropHeight,
      },
    },
    {
      resize: {
        width: BITMAP_DIMENSION,
        height: BITMAP_DIMENSION,
      },
    },
  ];
  const saveOptions = {
    compress: 1,
    format: ImageManipulator.SaveFormat.JPEG,
    base64: true,
  };
  return await ImageManipulator.manipulateAsync(uri, actions, saveOptions);
};

const convertToTensor = async (base64: any) => {
  const uIntArray = Base64Binary.decode(base64);
  const decodedImage = decodeJpeg(uIntArray, 3);
  return decodedImage.reshape([
    1,
    BITMAP_DIMENSION,
    BITMAP_DIMENSION,
    TENSORFLOW_CHANNEL,
  ]);
};

const predict = async (model: any, tensor: any) => {
  const output = await model.predict(tensor);
  return output.dataSync();
};

export const process = async (scan: any): Promise<string> => {
  const croppedData = await crop(scan, 300);

  await tf.setBackend("cpu");
  await tf.ready();

  const modelJSON = require("../model/model.json");
  const modelWeights = require("../model/weights.bin");
  const model = await tf.loadLayersModel(
    bundleResourceIO(modelJSON, modelWeights)
  );

  const tensor = await convertToTensor(croppedData.base64);

  const prediction = await predict(model, tensor);
  const highestPrediction = prediction.indexOf(
    Math.max.apply(null, prediction)
  );
  console.log(prediction);
  console.log(highestPrediction);

  return results[highestPrediction].diagnosis;
};
