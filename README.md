# RetinaOCT: Enhancing Retinal Abnormality Detection Through Deep-Learning Based Optical Coherence Tomography Analysis

Retinal abnormalities are prevalent health issues that can lead to irreversible vision loss, hence the importance of administering the most optimal treatments in a timely manner. One common imaging technique used to detect said abnormalities is optical coherence tomography (OCT), which utilizes reflected coherent light to noninvasively generate high resolution images of the back eye. However, there currently lacks an efficient data-driven approach to OCT analysis, therefore potentially risking delayed care, increased work-demand, and ultimately further health complications. Our research hypothesizes that deep learning algorithms consisting of multilayered convolutional neural networks can perform accurate and efficient diagnosis of retinal disease, thus ameliorating such risks. Our dataset consists of 100,000 OCT scans – accumulated by randomly selecting scans published between 2013 and 2017 from a diverse array of hospitals – encompassing healthy retinas and retinas diagnosed with choroidal neovascularization, diabetic macular edema, and drusen. Then, we developed our algorithm by constructing a convolutional neural network consisting of 4 convolutional and max pooling layers, which were compiled using the Adam optimizer and a learning rate of 0.001. Our results unveil that deep-learning based OCT analysis is capable of diagnosing retinal damage with comparable performance to that of a human optometrist; our model achieved an overall accuracy of ~92% and a validation accuracy of ~97.5%, therefore rendering deep learning as a viable assistance to optometrists and ophthalmologists.

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
