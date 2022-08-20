from keras.layers import Conv2D, Dense, Flatten, MaxPooling2D
from keras.models import Sequential
from basemodel import BaseModel

class RetinaOCT(BaseModel):
  def __init__(self, args, train, val):
    super().__init(args, train, val)

  def build(self):
    model = Sequential()

    model.add(Conv2D(32, (3,3), activation='relu', input_shape=(self.args.target_size, self.args.target_size, 3))) 
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
    self.set_model(model)