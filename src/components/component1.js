import Property1Variant2 from "./property1-variant2";
import "./component1.css";
const Component1 = () => {
  return (
    <div className="component-1">
      <Property1Variant2
        propTop="20px"
        propBorderRadius="unset"
        propBackground="unset"
        propPosition="absolute"
        propLeft="20px"
        propCursor="unset"
        propBorder="unset"
        propPadding="unset"
        propBackgroundColor="unset"
        propColor="#fff"
        propDisplay="inline-block"
      />
      <Property1Variant2 buttonText="Visit Next" />
    </div>
  );
};

export default Component1;
