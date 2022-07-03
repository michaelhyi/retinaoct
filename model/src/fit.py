from keras.callbacks import EarlyStopping
from constants import EPOCHS, STEPS_PER_EPOCH, VAL_STEPS

def fit(model, train, val):
  es = EarlyStopping(monitor = 'val_loss', mode='min', patience=5, restore_best_weights='true')

  return model.fit(    
      train,
      steps_per_epoch = STEPS_PER_EPOCH,
      epochs = EPOCHS,
      validation_data=val,
      validation_steps = VAL_STEPS,
      verbose = 1,
      callbacks=[es])