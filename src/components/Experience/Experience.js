import React, { useState } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { FaReact } from "react-icons/fa";
import { ImHourGlass } from "react-icons/im";
import { SiJavascript } from "react-icons/si";

// import "./ExperienceStyles.css";

const Technologies = () => {
  const [works, setWork] = useState([
    {
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "C#",
        "Javascript",
        "ASP.NET Core",
        "Oracle PL/SQL",
      ],
      mainTech: ["MERN Stack"],
      years: "Oct 2020 - Present",
      title: "Associate Software Engineer",
      company: "DP Infotech (Pvt) Ltd",
      icon: <FaReact size="3rem" />,
    },
    {
      technologies: ["C#", "Javascript", "ASP.NET Core", "Oracle PL/SQL"],
      mainTech: ["ASP.NET Core"],
      years: "Nov 2019 - Oct 2020",
      title: "Trainee Software Engineer",
      company: "DP Infotech (Pvt) Ltd",
      icon: <SiJavascript size="3rem" />,
    },
  ]);

  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="">

      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {works.map(function (work, i) {
            //   const technologies = work.technologies;
            //   const mainTechnologies = work.mainTech;

            var mainTech = work.mainTech.map((technology, i) => {
              return (
                <Badge pill className="main-badge mr-2 mb-2" key={i}>
                  {technology}
                </Badge>
              );
            });
            var tech = work.technologies.map((technology, i) => {
              return (
                <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                  {technology}
                </Badge>
              );
            });
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.years}
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                //   style={{ color: "#000" }}
                icon={work.icon}
                key={i}
              >
                <div
                  style={{
                    textAlign: "left",
                    marginBottom: "4px",
                    color: "#000",
                  }}
                >
                  {mainTech}
                </div>

                <h3
                  className="vertical-timeline-element-title"
                  style={{ textAlign: "left", color: "#000" }}
                >
                  {work.title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{ textAlign: "left", color: "#000" }}
                >
                  {work.company}
                </h4>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "15px",
                    color: "#000",
                  }}
                >
                  {tech}
                </div>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              // <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              <ImHourGlass size="3rem" />
            }
          />
        </VerticalTimeline>
      </div>
      <SectionDivider divider />
    </Section>
  );
};

export default Technologies;
