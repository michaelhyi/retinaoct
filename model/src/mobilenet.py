from keras.applications import MobileNet
from keras.layers import GlobalAveragePooling2D, Dense
from keras.models import Model
from basemodel import BaseModel

class MobileNet(BaseModel):
  def __init__(self, args, train, val):
    super().__init__(args, train, val)

  def addTopModel(bottom_model):
    top_model = bottom_model.output
    top_model = GlobalAveragePooling2D()(top_model)
    top_model = Dense(1024, activation = "relu")(top_model)
    top_model = Dense(1024, activation = "relu")(top_model)
    top_model = Dense(512, activation = "relu")(top_model)
    top_model = Dense(4, activation = "softmax")(top_model)
    return top_model
  
  def build(self):
    mobilenet = MobileNet(weights = 'imagenet', 
                  include_top = False, 
                  input_shape = (self.args.target_size, self.args.target_size, 3))

    for layer in mobilenet.layers:
      layer.trainable = False

    for (i,layer) in enumerate(mobilenet.layers):
      print(str(i) + " "+ layer.__class__.__name__, layer.trainable)

    FC_Head = self.addTopModel(mobilenet)
    model = Model(inputs=mobilenet.input, outputs=FC_Head)

    model.summary()
    self.set_model(model)


