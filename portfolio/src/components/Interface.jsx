import React from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import Projects from "./Projects";
import DevelopmentRoadmap from "./DevelopmentRoadmap";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
  `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <AboutSection />
      </Section>
      <Section>
        {/* <SkillsSection name={"JavaScript"} percentage={90} /> */}

        <Timeline />
      </Section>
      <Section>
        <ProjectsSection />
      </Section>
    
      <Section>
        <ContactSection />
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
      <h1 className=" text-8xl font-bold  ">Hi I'm Tharindu</h1>
      <h3 className=" text-4xl ">A Digital Craftsman</h3>

      <motion.p
        className=" text-lg font-light mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I love creating awesome User Experiences, Designs and Full Stack Apps
      </motion.p>
      <motion.button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Contact
      </motion.button>
    </>
  );
};

const SkillsSection = ({ percentage, name }) => {
  return (
    <>
      <h1 className="mb-3 ml-2 font-bold mt-5">{name}</h1>

      <div className=" w-80 h-4 bg-gray-300 rounded-full">
        <motion.div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${percentage}%` }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1, originX: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
        </motion.div>
      </div>
    </>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <div className="flex gap-10 flex-col ">
        <h1 className="mb-10 text-6xl font-extrabold text-gray-600 experiences m-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-sky-400">
            Projects
          </span>{" "}
          & Experience.
        </h1>
        <div className="flex mt-0 flex-wrap gap-4 justify-center">

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                BookShelf
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              Online E commerce platform for a bookstore including more
              functionalities such as book subscriptions, Book Exchange and
              Donations. Advanced industry standard quality platform with the
              best practices.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>




          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Epazingha.me - Portfolio
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
            My personal portfolio, this site you are currently viewing. Built using react 3JS and tailwind css and hosted on netlify.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>





          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Audex LK
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              E commerce platform for sound equipment and a platform for the people to find the sound engineering professionals to their events. Platform for sound engineers to manage their events etc. 
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>





          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Mini Game - GODOT 
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              A mini game developing using godot engine. The game includes the features such as combat system leveling system physics and the score and health system. More features like sound effects and animations are to be added. 
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>






          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Sorting Algorithm Visualizer
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              A web application to visualize the sorting algorithms. The application is built using react. The application includes the features such as sorting speed control, array size control and the algorithm selection.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>




          

     

          

         

          
        </div>
      </div>
    </>
  );
};

function ContactSection() {
  return (
   <div className="flex justify-center m-auto">
   <form className="w-full max-w-lg ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
      <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
     
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>

  
   </div>
  );
}

export default Interface;
