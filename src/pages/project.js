import { useCallback } from "react";
import Property1Variant2 from "../components/property1-variant2";
import { useNavigate } from "react-router-dom";
import ProjectCardContainer from "../components/project-card-container";
import Component from "../components/component";
import "./project.css";
const Project = () => {
  const navigate = useNavigate();

  const onArrowBackClick = useCallback(() => {
    navigate("/skills");
  }, [navigate]);

  return (
    <div className="project">
      <div className="project-child" />
      <div className="project-inner">
        <div className="frame-child9" />
      </div>
      <div className="project1">{`<project>`}</div>
      <div className="project2">{`</project>`}</div>
      <Property1Variant2
        propTop="648px"
        propBorderRadius="unset"
        propBackground="unset"
        propPosition="absolute"
        propLeft="421px"
        propCursor="pointer"
        propBorder="none"
        propPadding="0"
        propBackgroundColor="transparent"
        propColor="#fff"
        propDisplay="inline-block"
      />
      <button className="arrow-back3" onClick={onArrowBackClick}>
        <img className="arrow-back-icon4" alt="" src="/arrow-back.svg" />
      </button>
      <ProjectCardContainer />
      <Component
        fraction="4/7"
        divPosition="absolute"
        divWidth="49px"
        divMarginTop="unset"
        divTop="747px"
        divLeft="1167px"
      />
    </div>
  );
};

export default Project;
