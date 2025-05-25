# Automatic Lyrics Alignment Demo Website
- 11020CS573100 Music Information Retrieval Final Project @NTHU
- Contributors: 翁玉芯、石郁琳、倪又晞

## Overview
![architec](https://github.com/WWW0828/Automatic-Lyrics-Alignment-Demo/assets/67411184/5567015e-c567-4fd3-8eb3-5b306fd07165)

We developed an word for word automatic lyrics alignment system to reduce manual labeling time of lyrics time stamp. We first separated voice and accompaniment of the input audio with Spleeter, and used wav2vec model + CTC algorithm to apply speech recognition, finally, we forced aligned the results with the groundtruth lyrics and got the time stamps. We made a website to visualize how well the lyrics and the audio were aligned through our system.

## Presentation & Demo
- [Presentation Slides](https://drive.google.com/file/d/18TEIujJEuCL1GpubS4cRsKVVCoV-laCX/view?usp=sharing)
- [YouTube Demo - The music of the night](https://www.youtube.com/watch?v=wB7LhVhrzXc)
- [YouTube Demo - Taylor Swift 22](https://youtu.be/CYsI-quWM4M)

![demo](https://github.com/WWW0828/Automatic-Lyrics-Alignment-Demo/assets/67411184/4d440787-ba46-4989-8ce1-0592aa81f31e)

