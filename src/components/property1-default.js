import { useMemo } from "react";
import "./property1-default.css";
const Property1Default = ({
  property1DefaultPosition,
  property1DefaultCursor,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultTop,
  property1DefaultLeft,
  sendDisplay,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      cursor: property1DefaultCursor,
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultPosition,
    property1DefaultCursor,
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const sendStyle = useMemo(() => {
    return {
      display: sendDisplay,
    };
  }, [sendDisplay]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="property-1default-child" />
      <div className="send" style={sendStyle}>
        Send
      </div>
    </div>
  );
};

export default Property1Default;
