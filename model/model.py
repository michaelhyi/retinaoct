#Import all the modules necessary to train, convert, and visualize the model.
from keras.layers import * #Import layers from Keras module in order to create all layers that will go into the Sequential model.
from keras.models import * # Import models from Keras module in order to set up a Sequential model. 
from keras.callbacks import * #Import callbacks from Keras module to enable early stopping, with the intention of preventing overfitting of the data while training.
from keras.preprocessing import image #Import image from Keras preprocessing module to use ImageDataGenerator to rescale data.
import matplotlib.pyplot as plt #Import matplotlib to visualize the model by creating accuracy per epoch and loss per epoch graphs.
import tensorflowjs as tfjs #Importing tensorflowjs module to be able to convert Keras model to a model that can be incorporated into React Native

#Data preparation
#For both training and testing data generators, rescale the RGB values of the data by a factor of 1/255 to prevent RGB values from being higher than 255.
train_datagen = image.ImageDataGenerator(
    rescale = 1./255,
    shear_range = 0.2,
    zoom_range = 0.2,
    horizontal_flip = True,
)
test_datagen = image.ImageDataGenerator(rescale=1./255)

#For both training and testing data generators, fetch the data from their respective directories, using a target size of 224x224, a batch size of 32, and a class mode of binary.
#For training dataset, fetch from "data/train" directory
train = train_datagen.flow_from_directory(
    "data/train",
    target_size = (224, 224),
    batch_size = 32,
    class_mode = 'binary'
)
#For testing dataset, fetch from "data/val" directory
test = test_datagen.flow_from_directory(
    "data/val",
    target_size = (224, 224),
    batch_size = 32,
    class_mode = 'binary'
)

#Build the Sequential model and add its corresponding layers to build a fully-connected network.
model = Sequential()
model.add(Conv2D(32, kernel_size=(3,3), activation='relu',input_shape=(224, 224, 3)))
model.add(Conv2D(64, (3,3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2,2)))
model.add(Dropout(0.25))

model.add(Conv2D(64, (3,3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2,2)))
model.add(Dropout(0.25))

model.add(Conv2D(128, (3,3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2,2)))
model.add(Dropout(0.25))

model.add(Flatten())
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(1, activation='sigmoid'))

#Compiling the sequential model using Adam as our optimizer, use a loss function of binary_crossentropy to evalulate set of weights for binary classification.
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

#Declare es as the EarlyStopping function, which monitors the validation loss of the model when fitting/training. Attempt to prevent model from overfitting.
es = EarlyStopping(monitor = 'val_loss', mode='min', patience=5, restore_best_weights='true')

#Start fitting/training the model. Using the training data, the validation data and the early stopping function defined above to prevent model from overfitting, train the model over a total of 10 epochs.
history = model.fit(
    train,
    epochs = 10,
    validation_data = test,
    callbacks=[es]
)

#Use matplotlib to visualize the model accuracy and model loss graphs
#Plot the model accuracy per epoch, using both curves from the accuracy and validation accuracy
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Model Accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train', 'Test'], loc='upper left')
plt.show()

#Plot the model loss per epoch, using both curves from the loss and validation loss
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Model Loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train', 'Test'], loc = 'upper left')
plt.show()

#Use the tensorflowjs module to convert the Keras model to a compatible model.json file and weights.bin file, in the directory "src/model". These files will be used in the React Native application.
tfjs.converters.save_keras_model(model, 'src/model')