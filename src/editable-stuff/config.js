// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#3E49A8, #BEC4F7, #6977F5, #A88B23, #E6D393",
  firstName: "Kayum",
  middleName: "",
  lastName: "Bekov",
  message:
    "Stay Hungry, Stay foolish",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kayumbekov",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kay_bekov/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kaybekov/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/kaybekov/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kaybekov.png"),
  imageSize: 200,
  message:
    "Hello, my name is Kayum Bekov and I am a software engineer. I have always been interested in technology and have taught myself a variety of frontend development skills, including HTML, CSS, JavaScript, React.js, Redux, Git. My passion for technology and drive to continuously learn and improve my skills has led me to this field. I have completed several personal projects using these technologies, including a responsive website and an interactive web application for a course project.",
  resume:
    "https://docs.google.com/document/d/1g3vZjcmu-S09IPxURjQkvbibCb5LCYak/edit?usp=share_link&ouid=103959848321197071147&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kayumbekov", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Create-Spotify-Playlist","Expenses-React-App","portfolio","deploying-a-static-site-with-netlify-sample"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/kaybekov.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/kaybekov.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "700",
    height: "700",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 0 },
    { name: "React", value: 0 },
    { name: "HTML", value: 0 },
    { name: "CSS", value: 0 },
    { name: "Git", value: 0 },
    { name: "Redux", value: 0 },
    { name: "Node.js", value: 0 },
    { name: "Mocha/Chai", value: 0 },
  ],
  softSkills: [
    { name: " Problem Solving", value: 0 },
    { name: "Communication", value: 0 },
    { name: "Persistance", value: 0 },
    { name: "Adaptability", value: 0 },
    { name: "Goal-Oriented", value: 0 },
    { name: "Empathy", value: 0 },
    { name: "Personal Responsibility", value: 0 },
    { name: "Creativity", value: 0 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    " I am currently looking for a front-end development internship. I am a quick learner and a team player, who is always willing to share my knowledge and skills to help others. If you know of any open positions or have any questions, please do not hesitate to reach out to me via email at",
  email: "kayumbekow@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
