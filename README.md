# RetinaOCT: Enhancing Retinal Abnormality Detection through Deep-Learning-based Optical Coherence Tomography Analysis

One common imaging modality used to detect retinal damage is optical coherence tomography (OCT), which utilizes reflected coherent light to noninvasively generate high-resolution images of the retina. However, studies have found that human ophthalmologists are prone to misinterpretation of OCT imaging. Our research hypothesizes that deep-learning algorithms can perform an accurate analysis of OCT imaging. In this work, we present RetinaOCT, a novel multi-layered convolutional neural network (CNN) architecture that outperforms current state-of-the-art (SOTA) models in diagnosing 3 diseases: choroidal neovascularization, diabetic macular edema, and drusen. Our dataset consists of approximately 100,000 OCT scans obtained from the Shiley Eye Institute of the University of California, San Diego, the California Retinal Research Foundation, and more. First, to establish baseline metrics, we use supervised transfer learning to fine-tune 5 SOTA models: VGG16, ResNet50, InceptionV3, MobileNet, and EfficientNetB7. Then, we construct RetinaOCT by creating a sequential model consisting of 4 two-dimensional convolutional layers and training it on our dataset. Overall, our model achieves an accuracy, validation accuracy, sensitivity, specificity, positive predictive value, and negative predictive value of 90.19%, 95.73%, 89.37%, 97.09%, 91.11%, and 96.48%, respectively. In conclusion, our work demonstrates that deep-learning-based OCT analysis is capable of diagnosing retinal abnormalities with comparable performance to that of a human ophthalmologist. Further, RetinaOCT achieves an average improvement in accuracy of 19.25% over prior baselines, thus establishing it as a new SOTA model for retinal abnormality detection.

![poster!](https://cdn.discordapp.com/attachments/928151464927445002/1127859474774888468/Screenshot_2023-07-10_001040.png)

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
