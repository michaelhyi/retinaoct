import argparse

from data import data
from retinaoct import RetinaOCT
from vgg16 import VGG16
from mobilenet import MobileNet
from resnet50 import ResNet50
from inceptionv3 import InceptionV3
from efficientnetb7 import EfficientNetB7

# confusion matrix
# redo grpahs
# Final accuracy + loss
# metrics PER class
# gpu
# scripts
# add dropout to cnn
# make everything just one run
# print all results to json file, organize all images and graphs

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
  
  parser.add_argument('--model', default='retinaoct', type=str)
  parser.add_argument('--saves_filepath', default='../saves/retinaoct.h5', type=str)
  parser.add_argument('--filepath', default='../saves/', type=str)

  args = parser.parse_args()

  train, val = data(args.train_dir, args.target_size, args.train_batch_size, args.test_dir, args.val_batch_size)

  if args.model == 'RetinaOCT':
    model = RetinaOCT(args, train, val)
  elif args.model == 'VGG16':
    model = VGG16(args, train, val)
  elif args.model == 'ResNet50':
    model = ResNet50(args, train, val)
  elif args.model == 'InceptionV3':
    model = InceptionV3(args, train, val)
  elif args.model == 'MobileNet':
    model = MobileNet(args, train, val)
  elif args.model == 'EfficientNetB7':
    model = EfficientNetB7(args, train, val)
  
  model.build()
  model.compile()
  model.train()

  model.plot_accuracy()
  model.plot_loss()

  if args.model == 'RetinaOCT':
    model.save_tfjs()
