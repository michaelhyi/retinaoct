import matplotlib.pyplot as plt
import tensorflowjs as tfjs
from keras.callbacks import EarlyStopping, ModelCheckpoint


class BaseModel:
  def __init__(self, args, train, val):
    self.args = args
    self.train = train
    self.val = val

  def compile(self):
    self.model.compile(loss=self.args.loss,
                       optimizer=self.args.optimizer,
                       metrics=['accuracy'])

  def train(self):
    es = EarlyStopping(monitor = 'val_loss', mode='min', patience=5, restore_best_weights='true')
    mc = ModelCheckpoint(self.args.saves_filepath,monitor="val_loss",mode="min",save_best_only = True,verbose=1)

    self.history = self.model.fit(self.train,
                                  steps_per_epoch=self.args.steps_per_epoch,
                                  epochs=self.args.epochs,
                                  validation_data=self.val,
                                  validation_steps=self.args.val_steps,
                                  verbose=1,
                                  callbacks=[es,mc])

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
  
  def save_tfjs(self):
    tfjs.converters.save_keras_model(self.model, self.args.filepath)
  
  def set_model(self, model):
    self.model=model
