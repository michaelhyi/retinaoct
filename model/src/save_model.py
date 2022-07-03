import tensorflowjs as tfjs

def save_model(model):
  tfjs.converters.save_keras_model(model, 'src')