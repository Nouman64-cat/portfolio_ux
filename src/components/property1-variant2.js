import { useMemo } from "react";
import "./property1-variant2.css";
const Property1Variant2 = ({
  buttonText,
  propTop,
  propBorderRadius,
  propBackground,
  propPosition,
  propLeft,
  propCursor,
  propBorder,
  propPadding,
  propBackgroundColor,
  propColor,
  propDisplay,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      top: propTop,
      borderRadius: propBorderRadius,
      background: propBackground,
      position: propPosition,
      left: propLeft,
      cursor: propCursor,
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [
    propTop,
    propBorderRadius,
    propBackground,
    propPosition,
    propLeft,
    propCursor,
    propBorder,
    propPadding,
    propBackgroundColor,
  ]);

  const visitNextStyle = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
    };
  }, [propColor, propDisplay]);

  return (
    <div className="property-1variant2" style={property1Variant2Style}>
      <div className="property-1variant2-child" />
      <div className="visit-next" style={visitNextStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default Property1Variant2;
