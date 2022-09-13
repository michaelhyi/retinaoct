from keras.applications import InceptionV3
from keras.layers import GlobalAveragePooling2D, Dense
from keras.models import Model
from basemodel import BaseModel

class InceptionV3Model(BaseModel):
  def __init__(self, args, train, val, saves_dir, checkpoint_dir):
    super().__init__(args, train, val, saves_dir, checkpoint_dir)
  
  def build(self):
    inceptionv3 = InceptionV3(weights = 'imagenet', 
                  include_top = False, 
                  input_shape = (self.args.target_size, self.args.target_size, 3))

    for layer in inceptionv3.layers:
      layer.trainable = False

    for (i,layer) in enumerate(inceptionv3.layers):
      print(str(i) + " "+ layer.__class__.__name__, layer.trainable)

    top_model = inceptionv3.output
    top_model = GlobalAveragePooling2D()(top_model)
    top_model = Dense(1024, activation='relu')(top_model)
    top_model = Dense(4, activation='softmax')(top_model)
    FC_Head = top_model
    model = Model(inputs=inceptionv3.input, outputs=FC_Head)

    model.summary()
    self.set_model(model)


