import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a 3rd year B.E. Computer Science student with specialisation in Artificial Intelligence and Machine Learning. I have worked on Data Structures and Algorithms. I am good at ReactJS, Golang, NodeJS and other programming languages. I have been building myself in research and innovation for most of my college life. My ultimate goal is to make a safer world for women where we do not need words like 'feminism' for the women to make them feel empowered. I believe that we will be totally free when words like 'women empowerment' stand no meaning just like 'men empowerment'. `
export const ABOUT_TEXT = `I like working on problems that challenge me. It brings me out of my comfort zone and I like to be on my toes all the time. I feel like keeping busy is my favorite thing to do from designing, developing to even modelling. During the course of my college I have experimented a lot things out of which few I exceled and they are visible on this page. I like to look at things with new perpective hence my knack of coming up with new innovations. I am a passionate writer and I took that interest and put it into research. I am a good public speaker if the topic that I have to deliver is of my interest. I am very specific about my stuff and it helps me keep myself organised.`;

export const EXPERIENCES = [
  {
    year: "2024 IEEE 9th International Conference for Convergence in Technology (I2CT)",
    role: "Sophisticated Safeguarding System of Automobile Rickshaws",
    company: "Conference Paper",
    description: `In this invention, a pressure plate will be connected to the ESP32 thing plus, the additional end of the ESP32 will be connected to the motor of the three-wheeler by which it commences the power unit. Appropriate restrictions and conditions will be applied with the ESP32 such that if the force on the three-wheeler exceeds the recommended limit, the EPS32 will act as a blockage and the motor will not start, resulting in the three-engine wheeler\’s not starting until and unless the safety measures of the transportation is not ensured properly... `,
    url: 'https://ieeexplore.ieee.org/document/10544209',
    technologies: ["Internet of Things", "Machine Learning", "TinyML", "RFID"],
  },
  {
    year: "2024 1st International Conference on Innovative Sustainable Technologies for Energy, Mechatronics, and Smart Systems (ISTEMS)",
    role: "No-Detergent, Minimal Water Usage Dishwasher Using Internet of Things",
    company: "Conference Paper",
    url: 'https://ieeexplore.ieee.org/document/10560110',
    description: "Water is a scarce resource. Environmentalists have been constantly making the people aware about how the depleting water levels could lead to problems which could put the lives of future generations in peril. Therefore, we propose an alternate system for cleaning and disinfecting utensils where there would be minimal to no use of water involved. Apart from the reduced water usage, it will also have features like minimal manual labor and water recycling properties. Adding on, this method also evaporates the need to use a detergent or soap which makes the used water really difficult to be reused. We are proposing the use of technical giant ESP32 thing plus in accordance with its camera module and Wifi module to bring the theory into practicality. The ESP32 thing plus will be used to control the additional sensors and also the working of the entire mechanical system that isbeing proposed. There will be a suction pump that will suckall the leftovers and debris that have been removed from the dirty dishes. The crucial technical involvement will be the strong heating environment that will be provided in a closed chamber to all the utensils so that the food stuck to the surface can melt down and then can be removed. There will be microwaves and ultraviolet rays used using laser mechanisms to provide a clean environment all around. The utensils will have to be placed in a certain arrangement to provide maximum surface area that is exposed to the decontamination process. There will be a blink application used to link all the working of the dish disinfector to the mobile applications of the user so that all the steps can be closely monitored and the data analytics can be stored for future references. Consequently, TINY ML will be incorporated along with all these functionalities to identify if there is any debris yet left on the subjects even after the meticulous cleaning process. This is a 360-degree cleaning and disinfecting process which eliminates the need of water usage and recycling the little water that is being used.",
    technologies: ["Internet of Things", "Machine Learning", "TinyML"],
  },
  {
    year: "2023 3rd Asian Conference on Innovation in Technology (ASIANCON)",
    role: "Temporal Convolutional Network and its Application in Various Sectors",
    company:"Conference Paper",
    description: "Artificial Intelligence has been working to meet the needs of humans for a very long time. There have been many progressive evolutions along the way. Neural Networks have emerged to be the best in the field of recognition and data analysis. There have been myriad developments and preparation of models over decades. There is CNN, RNN, FNN, DNN, TCN and many more. In this paper, we aim to compare the working of TCN which stands for Temporal Convolutional Network with the workings of above-mentioned models to figure out the best use of technology for catering the human needs. This paper is a deep analysis of the erstwhile models that are being used and how the temporal convolutional network finds its applications in the present scenario, what are the emerging fields that it can be implemented in and what were the positives of TCN over other neural network models. Through a careful study we have come to a conclusion that TCN could be the basic starting point of all the neural networks as it has proven to have less training time, less memory utilization and gives better results compared to other models. The functioning of TCN models is designed in such a way that no information can be drained from future to the past. Furthermore, the input image can be analyzed irrespective of the length as the same can be mapped to the output layer. TCN finds its application in various multilateral domains that includes healthcare, sequential forecasting, preventing cyber attacks, speech enhancement and many more. It has the capability to outperform the other models most of the time by a major difference and sometimes by a significant margin. Therefore, the applications of TCN can vary in accordance to the needs of the user.",
    technologies: ["Review", "Machine Learning"],
    url: 'https://ieeexplore.ieee.org/document/10270242',
  },
  {
    year: "2024 3rd International Conference for Innovation in Technology (INOCON)",
    role: "Artificial Intelligence and its Road to Altering the World Dynamics",
    company: "Conference Paper",
    description: "Humans have longed for computers to take over and make the monotonous and tedious tasks obsolete. Artificial Intelligence(AI) is just the right answers to this problem. There are not one but many sectors that are being manipulated by this ever- growing technology. It is safe to say that each day machines are getting better at understanding humans which is due to the evolution and innovation in this field. In this paper, we have uncovered various sectors in which artificial intelligence along with its various branches like Natural Language Processing (NLP), Machine Learning(ML) and Computer Vision have helped the world curate a better place by personalizing every daily use item. This has enhanced the way we live. However, there is a lot of data that is being used in order to bring these technologies to life. We have highlighted the constraints as well as the pleasures that this technology can bring us.",
    technologies: ["Review", "Machine Learning"],
    url: 'https://ieeexplore.ieee.org/document/10511959',
  },
  {
    year: "2023 3rd Asian Conference on Innovation in Technology (ASIANCON)",
    role: "Alternative Methods of Implementing the Applications of Smart Home Automation System",
    company: "Conference Paper",
description: "Since the declaration of the concept of technology, it has been mankinds' ultimate motive to make human work easier. There has to be minimum physical effort that humans have to put in in order to accomplish both daily and complex tasks. Automation is one of the key concepts that has replaced the existing workforce with machinery. Smart home automation systems aim to bring the technology of automation to homes. It has replaced the concept of switches, circuit boards and brought the technology in the hands of the user in literal sense. The system can obtain commands and instructions from the user directly through voice automation systems and perform tasks like dimming the lights and turning on the fan with minimal to no physical effort at all. Smart home automation systems aim to bring the idea of automation to a comfortable workspace where people can control their surrounding devices from their mobile phones. In this paper, we have reviewed various different technologies which are used in order to accomplish a safe and fast network in which the devices can communicate with each other. There are various different ways of doing the same thing and this paper reviews multiple ways in which the smart home automation system can work to provide the best results with minimum constraints.",    technologies: ["Review", "Machine Learning"],
technologies: ["Review", "Smart Technologies"],
    url: 'https://ieeexplore.ieee.org/document/10269843',
  },
];

export const PROJECTS = [
  {
    title: "Fully- functional, Hygienic and Resource Utilizing Animal Home",
    number: 'IN 202411017490',
    description:
"This invention proposes a new area improvised with Internet of Things to make sure that the street dogs have a proper shelter to stay as their home. As soon as any stray enters the area, the sensors will detect the movement. ESP32 Thing plus is the microcontroller going to be used in order to coordinate the sensors and obtain information from them. Tiny Machine Learning will be used along with the camera module from the ESP32 thing plus in order to count the number of strays on the platform and also the types of strays. All this information can be stored on the cloud of ESP32 thing plus and can be accessed via authentication on the spot on the mobile applications of the authorities on the spot. This innovation is solely for the animals who do not have a home and suffer from vigorous conditions due to weather or human cruelty.",
  },
  {
    title: "Rfid-Based Secured Transportation System For Students",
    number: "IN 202411003468",
    description:
      "The present invention relates to guarantee pleasure while taking experience of driving and road safety by safeguarding system of automobile rickshaws made using combination of artificial intelligence with the ESP32 S-3 and machine learning models with the ESP32 thing plus consisting of novel features.",
  },
  {
    title: "AUTOMATIC CLOTHES MANAGEMENT DEVICE",
    number: "IN 202311088273",
    description:
      "The present invention relates to an automatic clothes management device that is capable of providing a means to a user to easily wash out clothes by using optimum amount of water and detergent powder in accordance with the weight of the clothes automatically as well as drying the washed clothes to eliminate moisture from the clothes as well as hanging the washed clothes in a segregated manner, thereby eliminating requirement of external cloth hangers.",
  },
  {
    title: "AUTOMATED UTENSILS CLEANING DEVICE",
    number: "IN 202311088280",
    description:"The present invention relates to an automated utensils cleaning device that assists a user in cleaning the utensils in an automated manner by using less water in accordance with the location of the leftovers over the utensils. In addition, the proposed device is also capable of sanitizing and drying the utensils in minimum consumption time and with reduced manual efforts.",
  },
  {
    title: "IoT based Eatery Management System",
    number: "IN 202311054421 ",
    description: "The present invention relates to an IOT-based eatery management system that provides a provision for enabling a user to remotely select an eatery where the  user desires to visit along with reservation time and preferred food-items the user 5 desires to consume, and based on the user-defined reservation time food-items are  prepared in order to reduce the amount of time spent on waiting for the food. Additionally, the proposed system is also capable of cleaning the dining table with minimal mess and remove the dirt immediately to leave the table completely new for the new arriving user.",
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
