from keras.preprocessing.image import ImageDataGenerator

def data(TRAIN_DIR, TARGET_SIZE, TRAIN_BATCH_SIZE, TEST_DIR, VAL_BATCH_SIZE):
  train_datagen = ImageDataGenerator(
      rescale=1./255,
      rotation_range=40,
      width_shift_range=0.2,
      height_shift_range=0.2,
      shear_range=0.2,
      zoom_range=0.2,
      horizontal_flip=True,
      fill_mode='nearest'
  )
  train = train_datagen.flow_from_directory(
    TRAIN_DIR,
    target_size = TARGET_SIZE,
    class_mode = 'categorical',
    batch_size = TRAIN_BATCH_SIZE
  )

  val_datagen = ImageDataGenerator(rescale=1./255)
  val = val_datagen.flow_from_directory(
    TEST_DIR,
    target_size = TARGET_SIZE,
    class_mode = 'categorical',
    batch_size = VAL_BATCH_SIZE
  )

  print(train.class_indices)
  return train, val