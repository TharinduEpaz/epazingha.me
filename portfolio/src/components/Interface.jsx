import React from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const Section = (props) => {
  const { children} = props;

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
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className=" text-8xl font-bold  ">Hi I'm Tharindu</h1>
      <h3 className=" text-4xl ">A Digital Craftsman</h3>

      <motion.p className=" text-lg font-light mt-10"
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
    </Section>
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
          transition={{duration: 1}}
        >
          {" "}
        </motion.div>
      </div>
    </>
  );
};
export default Interface;
