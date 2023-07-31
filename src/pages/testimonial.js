import { useCallback } from "react";
import Property1Variant2 from "../components/property1-variant2";
import { useNavigate } from "react-router-dom";
import ProjectCardContainer1 from "../components/project-card-container1";
import Component from "../components/component";
import "./testimonial.css";
const Testimonial = () => {
  const navigate = useNavigate();

  const onArrowBackClick = useCallback(() => {
    navigate("/project");
  }, [navigate]);

  return (
    <div className="testimonial">
      <div className="testimonial-child" />
      <div className="testimonial-inner">
        <div className="frame-child8" />
      </div>
      <div className="testimonial1">{`<testimonial>`}</div>
      <div className="testimonial2">{`</testimonial>`}</div>
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
      <button className="arrow-back2" onClick={onArrowBackClick}>
        <img className="arrow-back-icon3" alt="" src="/arrow-back.svg" />
      </button>
      <ProjectCardContainer1 />
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
      <img className="mask-group-icon2" alt="" src="/mask-group@2x.png" />
      <Component
        fraction="5/7"
        divPosition="absolute"
        divWidth="49px"
        divMarginTop="unset"
        divTop="747px"
        divLeft="1167px"
      />
    </div>
  );
};

export default Testimonial;
