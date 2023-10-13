import React from "react";
import { CgMail, CgWorkAlt } from "react-icons/cg";
import { FaPencilAlt, FaReact, FaUserAstronaut } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import { BsCheckCircleFill, BsPeopleFill, BsStack } from "react-icons/bs";

import { HiHand, HiHome } from "react-icons/hi";

export const links = [
  {
    name: "Home",
    hash: "#home",
    label: "Home",
    icon: React.createElement(HiHome),
  },
  {
    name: "About",
    hash: "#about",
    label: "About",
    icon: React.createElement(FaUserAstronaut),
  },
  {
    name: "Projects",
    hash: "#projects",
    label: "Projects",
    icon: React.createElement(BsStack),
  },
  {
    name: "Skills",
    hash: "#skills",
    label: "Skills",
    icon: React.createElement(FaPencilAlt),
  },
  {
    name: "Contact",
    hash: "#contact",
    label: "Contact",
    icon: React.createElement(CgMail),
  },
] as const;

export const experiencesData = [
  {
    company: "UPTx",
    title: "IT engineering ",
    location: "Universidad Politécnica de Tlaxcala",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer at Atomic32.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    company: "Atomic32",
    title: "Front-End Developer",
    location: "CDMX, Mexico",
    description:
      "Mobile Application Developer (Android and iOS) At Atomic32, I developed applications for Android and iOS using React Native. I also contributed to the development of an administrative dashboard. I acquired solid skills in mobile app development and worked collaboratively with multidisciplinary teams. https://www.atomic32.com/",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    company: "IT Nora",
    title: "Full-Stack Developer",
    location: "Mexicali, Mexico",
    description:
      "Fullstack web and mobile application developer My main focus was mobile app development using React Native, Node.js and MongoDB, along with implementing Firebase Authentication for user authentication. In addition, I took on the responsibility of leading the UI/UX design and user experience for both the mobile app and the administrative dashboard. My experience in UI/UX design allowed me to create intuitive and attractive interfaces, improving usability and user satisfaction. I used DigitalOcean to carry out the deployment, configuring and managing the servers to ensure efficient and secure operation of the applications.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const cards = [
  {
    title: "Commitment",
    description: "I am committed to make each project have a unique design.",
    icon: React.createElement(HiHand),
  },
  {
    title: "Teamwork",
    description:
      "I have the ability to relate to my work team in order to solve any problem together in an efficient way.",
    icon: React.createElement(BsPeopleFill),
  },
  {
    title: "Responsibility",
    description:
      "I always deliver on the objectives that are set from the beginning and accept the challenges that come with them.",
    icon: React.createElement(BsCheckCircleFill),
  },
] as const;

export const skillsData = [
  {
    title: "Figma",
    color: "success",
    img: "https://i.imgur.com/9MpJzRU.png",
  },
  {
    title: "Adobe XD",
    color: "secondary",
    img: "https://i.imgur.com/pSHl2Mq.png",
  },
  {
    title: "Photoshop",
    color: "primary",
    img: "https://i.imgur.com/YzrsovX.png",
  },
  {
    title: "Blender",
    color: "warning",
    img: "https://i.imgur.com/RhBCAGR.png",
  },
  {
    title: "HTML",
    color: "danger",
    img: "https://i.imgur.com/75mERMr.png",
  },
  {
    title: "CSS",
    color: "primary",
    img: "https://i.imgur.com/3FhXJU9.png",
  },
] as const;

export const projectsImgs = [
  {
    title: "e-commerce",
    color: "success",
    img: "https://i.imgur.com/pRL8o2F.png",
  },

  {
    title: "Plants Store",
    color: "success",
    img: "https://i.imgur.com/JuB4o9Y.png",
  },
  {
    title: "K-Shop",
    color: "success",
    img: "https://i.imgur.com/7wtehna.jpg",
  },
  {
    title: "Movie Ticket",
    color: "success",
    img: "https://i.imgur.com/AKNs6AE.png",
  },
  {
    title: "Estudihambre App",
    color: "success",
    img: "https://i.imgur.com/vs4oPwJ.png",
  },
  {
    title: "Travel App",
    color: "success",
    img: "https://i.imgur.com/CXNEYTr.png",
  },
] as const;
