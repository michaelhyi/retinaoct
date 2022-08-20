from keras.applications import VGG16
from keras.layers import Dense, Dropout, Flatten
from keras.models import Model
from basemodel import BaseModel

class VGG16(BaseModel):
  def __init__(self, args, train, val):
    super().__init__(args, train, val)

  def addTopModel(bottom_model, D=256):
    top_model = bottom_model.output
    top_model = Flatten(name = "flatten")(top_model)
    top_model = Dense(D, activation = "relu")(top_model)
    top_model = Dropout(0.3)(top_model)
    top_model = Dense(4, activation = "softmax")(top_model)
    return top_model
  
  def build(self):
    vgg16 = VGG16(weights = 'imagenet', 
                  include_top = False, 
                  input_shape = (self.args.target_size, self.args.target_size, 3))

    for layer in vgg16.layers:
      layer.trainable = False

    for (i,layer) in enumerate(vgg16.layers):
      print(str(i) + " "+ layer.__class__.__name__, layer.trainable)

    FC_Head = self.addTopModel(vgg16)
    model = Model(inputs=vgg16.input, outputs=FC_Head)

    model.summary()
    self.set_model(model)


