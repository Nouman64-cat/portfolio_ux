import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../components/component";
import "./social.css";
const Social = () => {
  const navigate = useNavigate();

  const onArrowBackClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="social">
      <div className="social-child" />
      <div className="social-inner">
        <div className="frame-item" />
      </div>
      <div className="social1">{`<social>`}</div>
      <div className="social2">{`</social>`}</div>
      <button className="arrow-back" onClick={onArrowBackClick}>
        <img className="arrow-back-icon" alt="" src="/arrow-back.svg" />
      </button>
      <Component
        fraction="7/7"
        divPosition="absolute"
        divWidth="49px"
        divMarginTop="unset"
        divTop="747px"
        divLeft="1167px"
      />
      <div className="knightslasher64gmailcom">knightslasher64@gmail.com</div>
      <div className="httpsgithubcomnouman64-ca">
        https://github.com/Nouman64-cat
      </div>
      <div className="httpswwwinstagramcomnek">
        https://www.instagram.com/nek.code/
      </div>
      <button className="instagram-circle" />
      <button className="github" />
      <img
        className="circled-envelope-icon"
        alt=""
        src="/circled-envelope@2x.png"
      />
    </div>
  );
};

export default Social;
