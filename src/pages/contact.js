import { useCallback } from "react";
import Property1Variant2 from "../components/property1-variant2";
import { useNavigate } from "react-router-dom";
import Property1Default from "../components/property1-default";
import Component from "../components/component";
import "./contact.css";
const Contact = () => {
  const navigate = useNavigate();

  const onArrowBackClick = useCallback(() => {
    navigate("/testimonial");
  }, [navigate]);

  return (
    <div className="contact">
      <div className="contact-child" />
      <div className="contact-inner">
        <div className="rectangle-div" />
      </div>
      <div className="contact1">{`<contact>`}</div>
      <div className="contact2">{`</contact>`}</div>
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
      <img
        className="arrow-back-icon1"
        alt=""
        src="/arrow-back1.svg"
        onClick={onArrowBackClick}
      />
      <input
        className="contact-item"
        type="text"
        placeholder="Your Name"
        maxLength={100}
        minLength={5}
      />
      <input
        className="group-input"
        type="email"
        placeholder="Email Address"
        maxLength={100}
        minLength={5}
      />
      <input
        className="contact-child1"
        type="text"
        placeholder="Your Message"
        maxLength={1000}
        minLength={10}
      />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultCursor="pointer"
        property1DefaultBorder="none"
        property1DefaultPadding="0"
        property1DefaultBackgroundColor="transparent"
        property1DefaultTop="466px"
        property1DefaultLeft="251px"
        sendDisplay="inline-block"
      />
      <Component
        fraction="6/7"
        divPosition="absolute"
        divWidth="49px"
        divMarginTop="unset"
        divTop="747px"
        divLeft="1167px"
      />
    </div>
  );
};

export default Contact;
