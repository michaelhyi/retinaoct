# RetinaOCT: Enhancing Retinal Abnormality Detection Through Deep-Learning Based Optical Coherence Tomography Analysis

One common imaging modality used to detect retinal damage is optical coherence tomography (OCT), which utilizes reflected coherent light to noninvasively generate high-resolution images of the back eye. However, ophthalmologists are prone to misinterpretation of OCT imaging, as studies have found a false positive rate of 26.2% through manual diagnosis. Our research hypothesizes that deep-learning algorithms can perform an accurate interpretation of OCT imaging. In this work, we present a new multi-layered convolutional neural network (CNN) architecture that outperforms current state-of-the-art models in diagnosing 3 diseases: choroidal neovascularization, diabetic macular edema, and drusen. Our dataset consists of approximately 100,000 OCT scans obtained from the Shiley Eye Institute of the University of California, San Diego, the California Retinal Research Foundation, and more. First, to establish baseline metrics, we applied supervised transfer learning to fine-tune 5 state-of-the-art models: VGG16, ResNet50, InceptionV3, MobileNet, and EfficientNetB7. Then, we constructed the custom CNN architecture using 4 two-dimensional convolutional layers compiled using the Adam optimizer. Overall, our model achieved an accuracy, validation accuracy, sensitivity, specificity, positive predictive value, and negative predictive value of 90.19%, 95.73%, 91.11%, 89.37%, 97.09%, 91.11%, and 96.48%, respectively. In conclusion, these metrics unveil that deep-learning-based OCT analysis is capable of diagnosing retinal abnormalities with comparable performance to that of a human ophthalmologist. The custom model reflected a 3-11% improvement in accuracy over those of the 5 state-of-the-art models that we fine-tuned, thus alluding to its potential as a new state-of-the-art model for ophthalmology.

___


Tech Stack:

FRONTEND
- Typescript
- React Native/Expo

BACKEND/API
- Node.js
- PostgreSQL
- GraphQL
- Typeorm
- URQL

MACHINE LEARNING
- Python
- Keras
- Tensorflow
