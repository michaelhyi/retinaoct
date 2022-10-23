import argparse
import json

from data import data
from retinaoct import RetinaOCTModel
from vgg16 import VGG16Model
from mobilenet import MobileNetModel
from resnet50 import ResNet50Model
from inceptionv3 import InceptionV3Model
from efficientnetb7 import EfficientNetB7Model

if __name__ == '__main__':
  parser = argparse.ArgumentParser()

  parser.add_argument('--train_dir', default='../data/train/', type=str)
  parser.add_argument('--test_dir', default='../data/test/', type=str)
  parser.add_argument('--val_dir', default='../data/val/', type=str)

  parser.add_argument('--target_size', default=224, type=int)
  parser.add_argument('--epochs', default=15, type=int)
  parser.add_argument('--train_batch_size', default=100, type=int)
  parser.add_argument('--val_batch_size', default=20, type=int)
  parser.add_argument('--steps_per_epoch', default=835, type=int)
  parser.add_argument('--val_steps', default=48, type=int)
  
  parser.add_argument('--loss', default='categorical_crossentropy', type=str)
  parser.add_argument('--optimizer', default='adam', type=str)
  
  parser.add_argument('--filepath', default='../saves/', type=str)

  args = parser.parse_args()

  train, val = data(args.train_dir, args.target_size, args.train_batch_size, args.test_dir, args.val_batch_size)
  
  results = []

  for i in range(6):
    print(i)
    if i == 0:
      name = 'RetinaOCT'
      model = RetinaOCTModel(args, train, val, '../saves/retinaoct.h5', '../saves/retinaoct_checkpoint.h5')
    elif i == 1:
      name = 'VGG16'
      model = VGG16Model(args, train, val, '../saves/vgg16.h5','../saves/vgg16_checkpoint.h5')
    elif i == 2:
      name = 'ResNet50'
      model = ResNet50Model(args, train, val, '../saves/resnet50.h5', '../saves/resnet50_checkpoint.h5')
    elif i == 3:
      name = 'InceptionV3'
      model = InceptionV3Model(args, train, val, '../saves/inceptionv3.h5', '../saves/inceptionv3_checkpoint.h5')
    elif i == 4:
      name = 'MobileNet'
      model = MobileNetModel(args, train, val, '../saves/mobilenet.h5','../saves/mobilenet_checkpoint.h5')
    else:
      name = 'EfficientNetB7'
      model = EfficientNetB7Model(args, train, val, '../saves/efficientnetb7.h5','../saves/efficientnetb7_checkpoint.h5')
    
    model.build()
    model.compile()
    model.fit()

    model.plot_accuracy()
    model.plot_loss()
    model.plot_confusion_matrix()
    model.save()

    if i == 0:
      model.save_tfjs()
    
    acc, loss, val_acc, val_loss = model.evaluate()
    
    results.append({
      "name": name,
      "acc": acc,
      "loss": loss,
      "val_acc": val_acc,
      "val_loss": val_loss,
    })
    
  with open("../results.json", "w") as f:
    json.dump(results, f, indent=4)
