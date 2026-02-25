"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

/* -----------------------------------------
   EXPERIENCE DATA (MOVED INSIDE COMPONENT)
------------------------------------------ */

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Hexaware",
    icon: "/Hexaware.png", // replace with your actual image path
    iconBg: "#E6DEDD",
    date: "June 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Wlofx",
    icon: "/Wlofx.png", // replace with your actual image path
    iconBg: "#383E56",
    date: "December 2024 - June 2025",
    points: [
      "Focused on crafting responsive and visually appealing user interfaces using React.js and modern frontend frameworks.",
      "Coordinated with designers and backend developers to ensure seamless integration and a consistent user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Improved the performance and usability of web applications by optimizing design and code.",
    ],
  },
  {
    title: "Educator",
    company_name: "Disha Classes",
    icon: "/DishaClasses.png", // replace with your actual image path
    iconBg: "#383E56",
    date: "June 2024 - June 2025",
    points: [
      "Taught C, C++, Python, Java, JavaScript, and Full Stack Web Development.",
      "Developed practical coding exercises and guided students through real-world projects.",
      "Conducted interactive workshops and coding bootcamps to foster collaborative learning and problem-solving skills.",
      "Evaluated progress and provided personalized feedback to enhance learning outcomes.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Bombay Blokes",
    icon: "/bb.png", // replace with your actual image path
    iconBg: "#383E56",
    date: "June 2024 - Ongoing",
    points: [
      "Developed modern, responsive web applications using Next.js andTailwind CSS, ensuring high performance and a clean, intuitive UI.",
      "Implemented smooth animations and motion effects with Framer Motion to enhance user interaction and experience",
      "Conducted interactive workshops and coding bootcamps to foster collaborative learning and problem-solving skills.",
      "Integrated Firebase for real-time database, authentication, and hosting,enabling secure and scalable app functionality.",
    ],
  },
];

/* -----------------------------------------
   EXPERIENCE CARD
------------------------------------------ */

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden bg-white">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

/* -----------------------------------------
   MAIN COMPONENT
------------------------------------------ */

const TwoExperience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* <p className="text-center text-gray-400 text-[16px]">
          What I have done so far
        </p> */}
        {/* <h2 className="text-center text-white text-[36px] font-bold">
          Work Experience
        </h2> */}
        <h1 className="heading">
          Work
          <span className="text-purple"> Experience</span>
        </h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default TwoExperience;