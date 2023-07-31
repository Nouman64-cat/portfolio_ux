import { useCallback } from "react";
import Property1Variant2 from "../components/property1-variant2";
import { useNavigate } from "react-router-dom";
import Component from "../components/component";
import "./skills.css";
const Skills = () => {
  const navigate = useNavigate();

  const onArrowBackClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="skills">
      <div className="skills-child" />
      <div className="skills-inner">
        <div className="frame-child1" />
      </div>
      <div className="skills1">{`<skills>`}</div>
      <div className="skills2">{`</skills>`}</div>
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
      <button className="arrow-back1" onClick={onArrowBackClick}>
        <img className="arrow-back-icon2" alt="" src="/arrow-back.svg" />
      </button>
      <div className="figma-react-js-container">
        <span className="figma-react-js-container1">
          <p className="figma">Figma</p>
          <p className="figma">React JS</p>
          <p className="figma">Javascript</p>
          <p className="figma">HTML 5</p>
          <p className="figma">CSS 3</p>
          <p className="tailwind-css">Tailwind CSS</p>
        </span>
      </div>
      <div className="frame-div">
        <div className="frame-child2" />
      </div>
      <div className="skills-inner1">
        <div className="frame-child3" />
      </div>
      <div className="skills-inner2">
        <div className="frame-child4" />
      </div>
      <div className="skills-inner3">
        <div className="frame-child5" />
      </div>
      <div className="skills-inner4">
        <div className="frame-child5" />
      </div>
      <div className="skills-inner5">
        <div className="frame-child7" />
      </div>
      <Component
        fraction="3/7"
        divPosition="absolute"
        divWidth="49px"
        divMarginTop="unset"
        divTop="747px"
        divLeft="1167px"
      />
    </div>
  );
};

export default Skills;
