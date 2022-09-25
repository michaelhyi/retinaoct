# RetinaOCT: Enhancing Retinal Abnormality Detection Through Deep-Learning Based Optical Coherence Tomography Analysis

One of the most common imaging modalities used to detect macular-degenerating retinal abnormalities (such as choroidal neovascularization, diabetic macular edema, and drusen) is optical coherence tomography (OCT), which utilizes reflected coherent light to noninvasively generate high resolution images of the back eye. However, ophthalmologists are prone to misinterpretation of OCT imaging, as studies have found a false positive rate of 26.2% through manual diagnosis. Our research hypothesizes that deep learning algorithms can perform accurate OCT analysis; in this work, we present a new multi-layered convolutional neural network (CNN) architecture that outperforms current state-of-the-art architectures in retinal damage assessment. Our dataset consists of approximately 100,000 OCT scans – augmented from the Shiley Eye Institute of the University of California, San Diego, the California Retinal Research Foundation, and more – encompassing healthy retinas and retinas diagnosed with the aforementioned retinal abnormalities. First, to establish the baseline metrics for the dataset, we applied supervised transfer learning to fine-tune 5 state-of-the-art models: VGG16, ResNet50, InceptionV3, MobileNet, and EfficientNetB7. Then, we constructed the custom CNN architecture using 4 two-dimensional convolutional layers compiled using the Adam optimizer. Overall, our model achieved an accuracy, validation accuracy, sensitivity, specificity, PPV, and NPV of 90.19%, 95.73%, 91.11%, 89.37%, 97.09%, 91.11%, and 96.48%, respectively. The custom model reflected a 3-11% improvement in accuracy than those of the 5 state-of-the-art models that we fine-tuned, unveiling that deep-learning based OCT analysis is capable of diagnosing retinal damage with comparable performance to that of a human opthamologist. Ultimately, this custom CNN architecture alludes to its potential as a new state-of-the-art model for ophthalmology.


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
