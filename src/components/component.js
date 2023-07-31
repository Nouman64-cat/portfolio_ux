import { useMemo } from "react";
import "./component.css";
const Component = ({
  fraction,
  divPosition,
  divWidth,
  divMarginTop,
  divTop,
  divLeft,
}) => {
  const divStyle = useMemo(() => {
    return {
      position: divPosition,
      width: divWidth,
      marginTop: divMarginTop,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divWidth, divMarginTop, divTop, divLeft]);

  return (
    <div className="div" style={divStyle}>
      <div className="div1">{fraction}</div>
    </div>
  );
};

export default Component;
