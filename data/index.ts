export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time lines",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently Building a reusable JS animation library for multiple UI components.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    type: "website",
    title: "DEX",
    des: "I built a full-stack SaaS platform enabling secure social media content collaboration, structured approvals, and client reviews via private links.",
    img: "/projects/dex.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/webflow.png",
    ],
    link: "https://www.makeyourdex.com",
  },
  {
    id: 2,
    type: "website",
    title: "CheckMy Creds",
    des: "Developed a cybersecurity platform that scans breach databases to detect exposed emails and credentials, providing real-time alerts and protection steps.",
    img: "/projects/checkmycred.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://checkmycreds.com",
  },
  {
    id: 3,
    type: "website",
    title: "Bombay Blokes",
    des: "Designed and developed a dynamic agency website for a digital branding firm, showcasing services, case studies, studio capabilities, and high-profile clientele.",
    img: "/projects/bb.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://bombayblokes.com",
  },
  {
    id: 4,
    type: "website",
    title: "Apple Website",
    des: "A responsive replica of the Apple website showcasing modern UI design, navigation, and layout using advanced front-end technologies.",
    img: "/projects/apple.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://aryan-website.netlify.app",
  },
  {
    id: 5,
    type: "website",
    title: "Presolv360",
    des: "Developed an animated, conversion-focused ODR course platform featuring structured modules, certification integration, and optimized user experience.",
    img: "/projects/preslov.png",
    iconLists: ["/next.svg", "/tail.svg", "/fm.svg"],
    link: "https://trainings.presolv360.com",
  },
  {
    id: 6,
    type: "website",
    title: "NITYA",
    des: "Built a high-conversion animated CPD training website helping schools modernize teaching strategies,  and streamline professional development.",
    img: "/projects/nitya.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://www.nityatraining.com",
  },
  {
    id: 7,
    type: "website",
    title: "Shopping Cart",
    des: "A dynamic e-commerce website clone featuring product catalog, responsive design, and user-friendly navigation, mirroring Amazon's core functionality.",
    img: "/projects/flipkartclone.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/aryankuril/Amazon-clone",
  },
  {
    id: 8,
    type: "website",
    title: "Book Store",
    des: "Online bookstore app to browse, search, and purchase books across genres with integrated cart and secure checkout system.",
    img: "/projects/book-app.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://bookk-store.netlify.app",
  },
  {
    id: 9,
    type: "website",
    title: "Movix Master",
    des: "Movix-Master is a movie app to explore, search, and watch trailers for trending and upcoming movies and shows.",
    img: "/projects/movix-master.png",
    iconLists: ["/next.svg", "/tail.svg", "/fm.svg"],
    link: "https://movix-master.netlify.app",
  },
  // {
  //   id: 10,
  //   type: "website",
  //   title: "Weather App",
  //   des: "A simple weather app that shows real-time weather updates, temperature, and conditions based on user location or search.",
  //   img: "/projects/weather-app.png",
  //   iconLists: ["/re.svg", "/java-script.png", "/css.png"],
  //   link: "https://weather-app-arayn.netlify.app",
  // },

  {
    id: 10,
    type: "game",
    title: "Number Game",
    des: "A simple and fun game where players add numbers to reach a target score, improving arithmetic skills with interactive gameplay.",
    img: "/projects/numbergame.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://number-game-aryan.netlify.app",
  },
  {
    id: 11,
    type: "game",
    title: "Memory Game",
    des: "Memory-based card game where users flip and match pairs, improving concentration, recall ability, and overall cognitive focus skills.",
    img: "/projects/gussinggame.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://memory-game-aryan.netlify.app",
  },
  {
    id: 12,
    type: "game",
    title: "Tetris Game",
    des: "A creative game combining logic and reflex-based challenges through interactive box mechanics, ensuring a fun experience.",
    img: "/projects/boxgame.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://tetris-arayan.netlify.app",
  },
  {
    id: 13,
    type: "game",
    title: "Pong Game",
    des: "Interactive Pong game featuring engaging mechanics, responsive controls, and AI-driven gameplay delivering a dynamic, fast-paced arcade experience.",
    img: "/projects/goalgame.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://pong-aryan.netlify.app",
  },
  {
    id: 14,
    type: "game",
    title: "Snake Game",
    des: "A nostalgic arcade game where players control a snake, collecting food while avoiding obstacles, with smooth controls and fun AI gameplay.",
    img: "/projects/snake-game.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://snakegame-aryan.netlify.app",
  },

  {
    id: 15,
    type: "game",
    title: "Squdo Game",
    des: "A strategic puzzle game involving logic and patterns, inspired by Sudoku, to challenge players’ problem-solving abilities.",
    img: "/projects/squdo.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://sudokugame-aryan.netlify.app",
  },
  {
    id: 16,
    type: "game",
    title: "Password Generator",
    des: "A secure password generator app that creates strong, random passwords with customizable length, symbols, numbers, and uppercase letters.",
    img: "/projects/password.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://password-generator-aryann.netlify.app",
  },
  {
    id: 17,
    type: "game",
    title: "QR Code Generator",
    des: "QR Code Generator app that instantly creates scannable QR codes from text or URLs for seamless sharing and access.",
    img: "/projects/Qr-code.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://qrcode-generator-aryan.netlify.app",
  },
  {
    id: 18,
    type: "game",
    title: "Expense Tracker",
    des: "An Expense Tracker app to manage income, track daily expenses, and visualize spending habits with simple, clear insights.",
    img: "/projects/expence.png",
    iconLists: ["/re.svg", "/java-script.png", "/css.png"],
    link: "https://expensetracker-ochre-tau.vercel.app",
  },
  // {
  //   id: 14,
  //   type: "game",
  //   title: "To-Do List",
  //   des: "To-Do List application allowing users to add, edit, delete, and organize daily tasks efficiently through a clean, intuitive, and responsive interface.",
  //   img: "/projects/to-do-list.png",
  //   iconLists: ["/re.svg", "/java-script.png", "/css.png"],
  //   link: "https://todo-list-aryann.netlify.app",
  // },
];


export const testimonials = [
  {
    quote:
      "Working with Aryan on our college office management system was a smooth experience. He understood our requirements clearly and delivered everything on time. The system is now much faster and easier to manage.",
    name: "Sayli Chavan",
    title: "Office College",
    img: "/sayli.jpeg",
  },
  {
    quote:
      "Aryan developed our eCommerce application exactly how we envisioned it. The UI is clean, the checkout process is smooth, and performance is solid. He was responsive and handled revisions professionally.",
    name: "Aniket Gupta",
    title: "ECommerce App Client",
    img: "/Aniket.jpeg",
  },
  {
    quote:
      "Our book app needed a modern design and structured backend, and Aryan delivered both. He explained technical things in simple terms and ensured the app works flawlessly.",
    name: "Nidhi Madivala",
    title: "Book App Client",
    img: "/NIDHI.jpg",
  },
  {
    quote:
      "The college office project required attention to detail and proper data handling. Aryan managed the development efficiently and provided continuous support even after deployment.",
    name: "Pankaj Kumar",
    title: "Office College",
    img: "/pankaj.jpeg",
  },
  {
    quote:
      "Aryan built our game application with great attention to user experience and performance. The app runs smoothly, and he was quick to fix any issues during testing.",
    name: "Riya Bhadhi",
    title: "Game App Client",
    img: "/riya.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Next.Js",
    img: "/next.svg",
  },
  {
    id: 2,
    name: "React.Js",
    img: "/react.png",
  },
  {
    id: 3,
    name: "Type Script",
    img: "/typescript.png",
  },
  {
    id: 4,
    name: "Tailwind Css",
    img: "/tail.svg",
  },
  {
    id: 5,
    name: "Vercel",
    img: "/vercel.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Development",
    desc: "Built scalable web apps using React, Node.js, Express, and MongoDB with focus on performance and clean architecture.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Problem Solving",
    desc: "Resolved complex UI, backend, and database challenges across multiple real-world projects.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Project Management",
    desc: "Handled projects from planning to deployment while ensuring deadlines and quality standards.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Leadership",
    desc: "Led development initiatives, guided peers, and ensured structured, maintainable code practices.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/aryankuril",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/aryankuril?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    img: "/insta.svg", // replace twit.svg with insta icon
    url: "https://www.instagram.com/aaryannsunilkuril",
  },
];
