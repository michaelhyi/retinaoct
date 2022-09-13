from keras.applications import EfficientNetB7
from keras.layers import GlobalAveragePooling2D, Dense, Dropout, BatchNormalization
from keras.models import Model
from basemodel import BaseModel

class EfficientNetB7Model(BaseModel):
  def __init__(self, args, train, val, saves_dir, checkpoint_dir):
    super().__init__(args, train, val, saves_dir, checkpoint_dir)
  
  def build(self):
    efficientnetb7 = EfficientNetB7(weights = 'imagenet', 
                  include_top = False, 
                  input_shape = (self.args.target_size, self.args.target_size, 3))

    for layer in efficientnetb7.layers:
      layer.trainable = False

    for (i,layer) in enumerate(efficientnetb7.layers):
      print(str(i) + " "+ layer.__class__.__name__, layer.trainable)

    top_model = efficientnetb7.output
    top_model = GlobalAveragePooling2D(name="avg_pool")(top_model)
    top_model = BatchNormalization()(top_model)
    top_model = Dropout(0.2, name="top_dropout")(top_model)
    top_model = Dense(4, activation="softmax", name="pred")(top_model)
    FC_Head = top_model
    model = Model(inputs=efficientnetb7.input, outputs=FC_Head)

    model.summary()
    self.set_model(model)


