import numpy as np

DATA_DIR = "../data/"
TRAIN_DIR = "../data/train/"
TEST_DIR = "../data/test/"
VAL_DIR = "../data/val/"

TARGET_SIZE = (150, 150)
EPOCHS = 15
TRAIN_BATCH_SIZE = 100
VAL_BATCH_SIZE = 20
STEPS_PER_EPOCH = np.ceil(83484/TRAIN_BATCH_SIZE)
VAL_STEPS = np.ceil(968/VAL_BATCH_SIZE)