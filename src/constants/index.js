import {  facebook, 
  instagram, 
  linkedin,
   twitter,  
   mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  albanus,
  rolins,
  vin,
    } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about us",
    title: "About Us",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact us",
    title: "Contant Us",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Search Engine Optimization",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  
  {
    name: "git",
    icon: git,
  },
  
    
  
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Globeflight",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Jeilo",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Creating and managing visual designs for web applications, employing tools like Adobe Creative Suite and other relevant technologies.",
      "Collaborating with diverse teams, including developers, product managers, and fellow designers, to produce visually appealing and high-quality products.",
      "Executing responsive design strategies and ensuring compatibility across various graphic platforms.",
      "Engaging in design critiques, offering valuable feedback to fellow designers during the creative process.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Africa Collection",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I doubted achieving a website as stunning as our product at Vigilux Corporation—proven wrong.",
    name:  "Rollins Shadrack",
    designation: "CTO",
    company: "EasBerry",
    image:"" ,
  },
  {
    testimonial:
      "I've never met a web developers who truly cares about their clients' success like Vigilux Corporation.",
    name: "Albanus Mutua",
    designation: "COO",
    company: "Jeilo",
    image: "./assets/5.jpeg",
  },
  {
    testimonial:
    "Vigilux boosted our website, resulting in a 50% traffic surge. Grateful beyond words!",
    name: "Vincent Otieno",
    designation: "CTO",
    company: "VIN'SA Enterprises",
    image: "../assets/albanus.jpeg",
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Booking Platform",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];





export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.vigilux.com/content/",
      },
      {
        name: "Meet Our Team",
        link: "https://www.vigilux.com/Meet-Our-Team/",
      },
      {
        name: "Create",
        link: "https://www.vigilux.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.vigilux.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.vigilux.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.vigilux.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.vigilux.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.vigilux.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.vigilux.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.vigilux.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.vigilux.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.vigilux.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export {services, technologies, experiences, testimonials, projects, };