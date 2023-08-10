import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { CgIfDesign } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

import { motion } from "framer-motion";

function Timeline() {
 
  return (
    <>
      {/* <h1 class="mb-10 text-9xl font-extrabold text-gray-600 absolute"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-sky-400">Skills</span> & Experience.</h1> */}
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "40%",
            marginTop: "40px",
          }}
          contentArrowStyle={{ borderRight: "8px solid gray" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CgIfDesign />}
        >
          <span
            style={{ fontSize: "32px", color: "black", fontWeight: "bold" }}
          >
            Designer
          </span>
          <p>
            My Journey as a designer starts long time ago. I have been designing
            since I was 15 years old. I worked as a freelance designer in Upwork
            until recently
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "40%",
          }}
          contentArrowStyle={{ borderRight: "8px solid gray" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <span
            style={{ fontSize: "32px", color: "black", fontWeight: "bold" }}
          >
            Developer
          </span>

          <p>
            After I started Studying computer science in UCSC, My true passion
            came out. I used my creativity towards building new apps and user
            experiences
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "40%",
          }}
          contentArrowStyle={{ borderRight: "8px solid gray" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdEngineering/>}
        >
          <span
            style={{ fontSize: "32px", color: "black", fontWeight: "bold" }}
          >
            Engineer
          </span>
          <p>
            Learning Systems Architecture, Data Structures and Algorithms and
            Database Design made my critical thinking ability to improve. I
            loved building Full Stack Apps ever since.{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
