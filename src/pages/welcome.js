import Footer from "../components/footer";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="welcome">
      <Footer />
      <div className="frame">
        <div className="frame1">
          <div className="design">Design</div>
          <div className="div2">{`</>`}</div>
          <div className="div3">{`</>`}</div>
        </div>
        <div className="frame-inner">
          <div className="frame-child" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
