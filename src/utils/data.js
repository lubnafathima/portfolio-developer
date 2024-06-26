import LogoSrc from "../assets/icons/logo.jpeg";
import ProjectSrc from "../assets/images/project.jpg";
import ArchivesSrc from "../assets/images/archives.jpg";

export const data = {
  about: {
    logo: LogoSrc,
    title:
      "I'm Lubna — a frontend developer, passionate about crafting intuitive user experiences.",
    content: [
      "My journey began with a fascination for technology during my early years, which evolved into a career driven by a commitment to excellence in coding and user experience design.",
      "I have honed my skills in translating design concepts into functional web applications.",
      "My expertise spans across modern frontend technologies such as HTML5, CSS3, JavaScript, and various frameworks like React and Next JS, enabling me to create dynamic and responsive interfaces that elevate user interaction.",
    ],
  },
  education: [
    {
      id: 1,
      institution: "MSAJCE",
      course: "B.Tech IT",
      marks: "8.8 GPA",
      duration: "2019-2023",
    },
    {
      id: 2,
      institution: "Crescent",
      course: "12th Grade",
      marks: "60%",
      duration: "2018-2019",
    },
  ],
  experience: [
    {
      id: 1,
      company: "SenseGrass",
      category: "Agri-Tech",
      year: "2023-2024",
    },
    {
      id: 2,
      company: "Kuvi Network",
      category: "Ed-Tech",
      year: "2023",
    },
    {
      id: 3,
      company: "Fibo",
      category: "Health & Fitness",
      year: "2023",
    },
  ],
  work: [
    {
      id: 1,
      imgSrc: ProjectSrc,
      title: "X",
      description: "Gamified bite-sized learning",
      designation: "Designation"
    },
    {
      id: 2,
      imgSrc: ProjectSrc,
      title: "SuperDM",
      description: "An inbox that understands you",
      designation: "Designation"
    },
    {
      id: 3,
      imgSrc: ProjectSrc,
      title: "Compete",
      description: "1:1 quizzing battles",
      designation: "Designation"
    }
  ],
  archives: [
    {
      id: 1,
      imgSrc: ArchivesSrc,
      title: "Dunzo",
      description: "Hyperlocal delivery",
      designation: "Designation"
    },
    {
      id: 2,
      imgSrc: ArchivesSrc,
      title: "Hood",
      description: "Pseudonymous social network",
      designation: "Designation"
    },
    {
      id: 3,
      imgSrc: ArchivesSrc,
      title: "Zaffingo",
      description: "Online Yearbook Website",
      designation: "Designation"
    },
    {
      id: 4,
      imgSrc: ArchivesSrc,
      title: "Habitwave",
      description: "Social habit-building",
      designation: "Designation"
    }
  ],
  footer: {
    socialLinks: [
      {
        id: 1,
        text: "Contact",
        url: "mailto:lubnafathima275@gmail.com",
      },
      {
        id: 2,
        text: "Github",
        url: "https://github.com/lubnafathima",
      },
      {
        id: 3,
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/lubna-fathima-n/",
      },
      {
        id: 4,
        text: "Twitter",
        url: "https://twitter.com/MsCoder1/",
      },
    ],
    copywrite: "© 2024 Lubna Fathima N",
  },
};
