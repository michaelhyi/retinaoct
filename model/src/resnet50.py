from keras.applications import ResNet50
from keras.layers import AveragePooling2D, Dense, Flatten, Dropout
from keras.models import Model
from basemodel import BaseModel

class ResNet50Model(BaseModel):
  def __init__(self, args, train, val, saves_dir, checkpoint_dir):
    super().__init__(args, train, val, saves_dir, checkpoint_dir)

  def build(self):
    resnet50 = ResNet50(weights = 'imagenet', 
                        include_top = False, 
                        input_shape = (self.args.target_size, self.args.target_size, 3))

    for layer in resnet50.layers:
      layer.trainable = False

    for (i,layer) in enumerate(resnet50.layers):
      print(str(i) + " "+ layer.__class__.__name__, layer.trainable)

    top_model = resnet50.output
    top_model = AveragePooling2D(pool_size=(7, 7))(top_model)
    top_model = Flatten(name="flatten")(top_model)
    top_model = Dense(256, activation="relu")(top_model)
    top_model = Dropout(0.5)(top_model)
    top_model = Dense(4, activation="softmax")(top_model)
    FC_Head = top_model
    model = Model(inputs=resnet50.input, outputs=FC_Head)

    model.summary()
    self.set_model(model)


