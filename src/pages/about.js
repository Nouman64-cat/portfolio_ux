import { useCallback } from "react";
import Property1Variant2 from "../components/property1-variant2";
import { useNavigate } from "react-router-dom";
import Component from "../components/component";
import "./about.css";
const About = () => {
  const navigate = useNavigate();

  const onArrowBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="about">
      <div className="about-child" />
      <div className="about-inner">
        <div className="frame-child10" />
      </div>
      <div className="a-quotation-is">
        A quotation is the repetition of a sentence, phrase, or passage from
        speech or text that someone has said or written. In oral speech, it is
        the representation of an utterance that is introduced by a quotative
        marker, such as a verb of saying. For example: John said: "I saw Mary
        today".
      </div>
      <div className="about1">{`<about>`}</div>
      <div className="about2">{`</about>`}</div>
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
      <button className="arrow-back4" onClick={onArrowBackClick}>
        <img className="arrow-back-icon5" alt="" src="/arrow-back.svg" />
      </button>
      <Component
        fraction="2/7"
        divPosition="absolute"
        divWidth="49px"
        divMarginTop="unset"
        divTop="747px"
        divLeft="1167px"
      />
    </div>
  );
};

export default About;
