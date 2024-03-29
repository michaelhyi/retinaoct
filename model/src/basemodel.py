import matplotlib.pyplot as plt
import tensorflowjs as tfjs
from keras.callbacks import EarlyStopping, ModelCheckpoint
from keras.metrics import Precision, Recall, TruePositives, TrueNegatives, FalsePositives, FalseNegatives
import numpy as np
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay

class BaseModel:
  def __init__(self, args, train, val, saves_dir, checkpoint_dir):
    self.args = args
    self.train = train
    self.val = val
    self.saves_dir = saves_dir
    self.checkpoint_dir = checkpoint_dir

  def compile(self):
    self.model.compile(loss=self.args.loss,
                       optimizer=self.args.optimizer,
                       metrics=['accuracy', Precision(), Recall(), TruePositives(), TrueNegatives(), FalsePositives(), FalseNegatives()])

  def fit(self):
    es = EarlyStopping(monitor = 'val_loss', mode='min', patience=5, restore_best_weights='true')
    mc = ModelCheckpoint(self.checkpoint_dir,monitor="val_loss",mode="min",save_best_only = True,verbose=1)

    history = self.model.fit(self.train,
                             steps_per_epoch=self.args.steps_per_epoch,
                             epochs=self.args.epochs,
                             validation_data=self.val,
                             validation_steps=self.args.val_steps,
                             verbose=1,
                             callbacks=[es,mc]
                            )
    self.history = history

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
  
  def plot_confusion_matrix(self):
    Y_pred = self.model.predict(self.val, 967 // self.args.val_batch_size+1)
    y_pred = np.argmax(Y_pred, axis=1)

    cm = confusion_matrix(self.val.classes, y_pred)
    disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=['CNV', 'DME', 'DRUSEN', 'NORMAL'])

    disp.plot(cmap=plt.cm.Blues)
    plt.show()

  
  def save(self):
    self.model.save(self.saves_dir)
  
  def save_tfjs(self):
    tfjs.converters.save_keras_model(self.model, self.args.filepath)
  
  def set_model(self, model):
    self.model=model
  
  def evaluate(self):
    acc = self.history.history['accuracy'][-1]
    precision = self.history.history['precision'][-1]
    recall = self.history.history['recall'][-1]
    tp = self.history.history['true_positives'][-1]
    tn = self.history.history['true_negatives'][-1]
    fp = self.history.history['false_positives'][-1]
    fn  = self.history.history['false_negatives'][-1]
    loss = self.history.history['loss'][-1]
    val_acc = self.history.history['val_accuracy'][-1]
    val_loss = self.history.history['val_loss'][-1]
    
    return (acc, loss, val_acc, val_loss, precision, recall, tp, tn, fp, fn)
