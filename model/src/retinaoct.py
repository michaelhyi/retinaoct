import argparse

import matplotlib.pyplot as plt
import tensorflowjs as tfjs
from keras.callbacks import EarlyStopping
from keras.layers import Conv2D, Dense, Flatten, MaxPooling2D
from keras.models import Sequential

from data import data


class RetinaOCT:
  def __init__(self, args, train, val):
    self.args = args
    self.train = train
    self.val = val
  
  def build(self):
    model = Sequential()

    model.add(Conv2D(32, (3,3), activation='relu', input_shape=(150, 150, 3))) 
    model.add(MaxPooling2D(2, 2))

    model.add(Conv2D(64, (3,3), activation='relu'))
    model.add(MaxPooling2D(2, 2))

    model.add(Conv2D(128, (3,3), activation='relu'))
    model.add(MaxPooling2D(2, 2))

    model.add(Conv2D(128, (3,3), activation='relu'))
    model.add(MaxPooling2D(2, 2))
  
    model.add(Flatten())
    model.add(Dense(512, activation='relu'))

    model.add(Dense(4, activation='softmax'))

    model.summary()
    self.model = model

  def compile(self):
    self.model.compile(loss=self.loss,
                       optimizer=self.optimizer,
                       metrics=self.metrics)

  def train(self):
    es = EarlyStopping(monitor = 'val_loss', mode='min', patience=5, restore_best_weights='true')

    self.history = self.model.fit(    
      train,
      steps_per_epoch = args.steps_per_epoch,
      epochs = args.epochs,
      validation_data=val,
      validation_steps = args.val_steps,
      verbose = 1,
      callbacks=[es])

  def plot_accuracy(self):
    plt.plot(self.history.history['accuracy'])
    plt.plot(self.history.history['val_accuracy'])
    plt.title('Model Accuracy')
    plt.ylabel('Accuracy')
    plt.xlabel('Epoch')
    plt.legend(['Train', 'Test'], loc='upper left')
    plt.show()

  def plot_loss(self):
    plt.plot(self.history.history['loss'])
    plt.plot(self.history.history['val_loss'])
    plt.title('Model Loss')
    plt.ylabel('Loss')
    plt.xlabel('Epoch')
    plt.legend(['Train', 'Test'], loc = 'upper left')
    plt.show()
  
  def save(self):
    tfjs.converters.save_keras_model(self.model, 'src')

if __name__ == '__main__':
  parser = argparse.ArgumentParser()

  parser.add_argument('--data_dir', default='../data/', type=str)
  parser.add_argument('--train_dir', default='../data/train/', type=str)
  parser.add_argument('--test_dir', default='../data/test/', type=str)
  parser.add_argument('--val_dir', default='../data/val/', type=str)

  parser.add_argument('--target_size', default=(224, 224), type=tuple)
  parser.add_argument('--epochs', default=15, type=int)
  parser.add_argument('--train_batch_size', default=100, type=int)
  parser.add_argument('--val_batch_size', default=20, type=int)
  parser.add_argument('--steps_per_epoch', default=835, type=int)
  parser.add_argument('--val_steps', default=48, type=int)
  
  parser.add_argument('--loss', default='categorical_crossentropy', type=str)
  parser.add_argument('--optimizer', default='adam', type=str)
  parser.add_argument('--metrics', default=['accuracy'], type=list)

  args = parser.parse_args()

  train, val = data(args.train_dir, args.target_size, args.train_batch_size, args.test_dir, args.val_batch_size)

  model = RetinaOCT(args, train, val)
  model.build()
  model.compile()
  model.train()

  model.plot_accuracy()
  model.plot_loss()

  model.save()
