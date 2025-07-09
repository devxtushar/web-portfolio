import {
  CustomTitle,
  Experience,
  FAQ,
  Projects,
} from "../interfaces/HomeInterface";

export const customTitleWorks: CustomTitle = {
  heading: "Curated Work",
  title: "Featured Projects",
  subtitle:
    "Featuring robust solutions that deliver seamless user experiences and innovative functionality",
};
export const customTitleFAQJson: CustomTitle = {
  heading: "Some doubts",
  title: "Frequently Asked Questions",
  subtitle: "Your answers await right here",
};
export const customTitleTalk: CustomTitle = {
  heading: "Some doubts",
  title: "Frequently Asked Questions",
  subtitle: "Your answers await right here",
};
export const customTitleExperienceJson: CustomTitle = {
  heading: "My Experiences",
  title: "Where I've been employed",
  subtitle: "",
};

export const myExperienceJson: Experience[] = [
  {
    designation: "Software Engineer",
    company: "SuveraFresh",
    join: "Oct 2024",
    leave: "Present",
    city: "Kanpur",
    country: "India",
    work: [
      { points: "Created dynamic UI using React Native and NativeWind." },
      { points: "Implemented Firebase for real-time notifications." },
      { points: "Enhanced security using JWT authentication." },
    ],
  },
  {
    designation: "Freelancer",
    company: "Web & Android Dev",
    join: "Jul 2022",
    leave: "Sep 2024",
    city: "Kanpur",
    country: "India",
    work: [
      { points: "Developed front-end using React Native and Redux Toolkit." },
      { points: "Managed backend with Node.js and MongoDB." },
      { points: "Improved user experience on SkillyCoders app." },
      {
        points: "Integrated secure JWT authentication  mechanism",
      },
    ],
  },
  {
    designation: "Software Engineer",
    company: "Startxlabs Technologies",
    join: "Jul 2021",
    leave: "Jun 2022",
    city: "Gurugram",
    country: "India",
    work: [
      { points: "Optimized React.js apps for faster loading." },
      { points: "Implemented scalable JWT authentication." },
      { points: "Designed reusable React Native components." },
      { points: "Built seamless pagination for large datasets." },
      { points: "Collaborated on EdTech and E-commerce projects." },
    ],
  },
  {
    designation: "Software Engineer Intern",
    company: "Mobiloitte",
    join: "Mar 2021",
    leave: "Jun 2021",
    city: "New Delhi",
    country: "India",
    work: [
      { points: "Gained experience in Agile methodologies and SDLC." },
      { points: "Enhanced skills in React.js and API integration." },
      { points: "Collaborated on delivering software solutions." },
      { points: "Optimized APIs to improve functionality." },
    ],
  },
];

export const faqJson: FAQ[] = [
  {
    question: "Are you available to hire full time?",
    answer:
      "Currently, I am working full-time but remain open to exciting opportunities. If you have a project or position that aligns with my expertise, feel free to reach out.",
  },
  {
    question: "In which technologies do you work?",
    answer:
      "I work on both web and mobile applications. For web development, I use React.js, and for Android apps, I use React Native.",
  },
  {
    question: "Can we have a one-to-one session?",
    answer:
      "Yes, absolutely! Kindly email me at devxtushar@gmail.com and I can arrange a personalized session as soon as possible. I am committed to ensuring a productive and engaging discussion tailored to your needs.",
  },
];

export const workProjectsJson: Projects[] = [
  {
    projectName: "GetNow - Android",
    title: "Get online groceries, food and more delivered in just minutes",
    startYear: "2025",
    type: "Public",
    liveUrl: "https://github.com/devxtushar/GetNow-app",
    techStack: [
      {
        name: "Typescript",
      },
      {
        name: "NativeWind",
      },
      {
        name: "React Native",
      },
      {
        name: "React Navigation",
      },
      {
        name: "Redux Toolkit",
      },
    ],
    description: [
      {
        points:
          "GetNow brings your favorite local stores online—groceries, food, medicines, and more delivered in just minutes.",
      },
      {
        points:
          "Designed and implemented intuitive product and product detail screens with a clean and responsive UI using NativeWind and Native Paper.",
      },
      {
        points:
          "Developed a robust cart and order management system using Redux Toolkit.",
      },
      {
        points:
          "Implemented an order tracking flow: after placing an order, users are guided through real-time status updates from 'Preparing' to 'Out for Delivery', and finally to 'Delivered', each stage transitioning automatically every 30 seconds.",
      },
      {
        points:
          "Managed all application state, including cart, order flow, and UI transitions, efficiently using Redux Toolkit.",
      },
    ],

    images: [
      {
        url: "/images/gn1.png",
      },

      {
        url: "/images/gn2.png",
      },
      {
        url: "/images/gn6.png",
      },
      {
        url: "/images/gn3.png",
      },
      {
        url: "/images/gn4.png",
      },
    ],
  },
  {
    projectName: "SuveraFresh - Android",
    title: "Fresh Raw Non-Veg Delivered to Your Doorstep",
    startYear: "2025",
    type: "Private",
    liveUrl: "https://play.google.com/store/apps/details?id=com.suverafresh",
    techStack: [
      {
        name: "Typescript",
      },
      {
        name: "NativeWind",
      },
      {
        name: "React Native",
      },
      {
        name: "TanStack Query",
      },
      {
        name: "Native Paper",
      },
      {
        name: "Redux Toolkit",
      },
      {
        name: "Firebase",
      },
    ],
    description: [
      {
        points:
          "Developed a seamless ordering system using React Native, allowing users to purchase fresh raw meat, and seafood.",
      },
      {
        points:
          "Implemented JWT Secure Token Refresh and Access Token mechanism to enhance user authentication.",
      },
      {
        points:
          "Integrated Firebase notifications to provide real-time updates on order status, promotions, and personalized alerts.",
      },
      {
        points:
          "Designed a visually appealing and responsive UI using NativeWind and Native Paper, ensuring a smooth user experience across devices.",
      },
      {
        points:
          "Developed a full-featured cart functionality, allowing users to add, update, and remove items seamlessly before checkout.",
      },
      {
        points:
          "Utilized React Native Tab and Stack Navigation for intuitive and user-friendly app navigation.",
      },
    ],
    images: [
      {
        url: "/images/sf-01.png",
      },

      {
        url: "/images/sf-03.png",
      },
      {
        url: "/images/sf-04.png",
      },
    ],
  },
  {
    projectName: "Your Style - Web",
    title: "Cross-Platform Product Comparison Made Easy",
    startYear: "2025",
    type: "Public",
    liveUrl: "https://github.com/devxtushar/your-style-web",

    techStack: [
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "ReactJS",
      },
      {
        name: "TanStack Query",
      },
      {
        name: "Redux Toolkit",
      },
      {
        name: "Node",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "AWS",
      },
    ],
    description: [
      {
        points:
          "Implemented product comparison functionality using Redux Toolkit, allowing users to select and compare items from different platforms seamlessly",
      },
      {
        points:
          "Developed advanced filtering and pagination, ensuring an optimized user experience when browsing products.",
      },
      {
        points:
          "Integrated a responsive and intuitive UI, designed with Tailwind CSS for consistency across devices.",
      },
      {
        points:
          "Leveraged React Router DOM for smooth navigation, enhancing usability and engagement.",
      },
    ],
    images: [
      {
        url: "/images/ys-01.png",
      },
      {
        url: "/images/ys-02.png",
      },
      {
        url: "/images/ys-03.png",
      },
      {
        url: "/images/ys-04.png",
      },
    ],
  },
  {
    projectName: "Attendee - Android",
    title: "Streamlining employee attendance management",
    startYear: "2024",
    type: "Public",
    liveUrl: "https://github.com/devxtushar/attendee-app",
    techStack: [
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "React Native",
      },
      {
        name: "Native Paper",
      },
      {
        name: "TanStack Query",
      },
      {
        name: "Redux Toolkit",
      },
      {
        name: "Node",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "AWS",
      },
    ],
    description: [
      {
        points:
          "Streamlined employee attendance tracking, reducing manual errors by 30%.",
      },
      {
        points:
          "Implemented seamless pagination for handling data-heavy attendance logs efficiently.",
      },
      {
        points:
          "Enhanced security with JWT-based authentication, ensuring safe access to user data.",
      },
      {
        points:
          "Integrated real-time notifications with Firebase, improving communication by 25%.",
      },
      {
        points:
          "Utilized React Native Navigation for intuitive and user-friendly app navigation.",
      },
      {
        points: "Deployed backend on AWS with AWS Elasticbean Stalk.",
      },
    ],
    images: [
      {
        url: "/images/hr-home-removebg.png",
      },
      {
        url: "/images/hr-verify-removebg.png",
      },
    ],
  },
];
