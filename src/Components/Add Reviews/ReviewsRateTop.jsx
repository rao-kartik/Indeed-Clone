import React from "react";
import { RatingButton } from "../../Custom UI/ACustomUI";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 19.95px;
  margin: 0px 0px 15px;
  padding: 24px 0px 0px;
`;
const button_Data = [
  {
    value: "1",
  },
  {
    value: "2",
  },
  {
    value: "3",
  },
  {
    value: "4",
  },
  {
    value: "5",
  },
];
export const ReviewsRateTop = ({ compname }) => {
  const [color, setColor] = React.useState();
  const onChange = (e) => {
    const { value } = e.target;
    setColor(value);
  };
  return (
    <div>
      <H1>Please rate your overall interview experience at {compname}.</H1>
      {button_Data.map((item) => (
        <RatingButton
          key={item.value}
          value={item.value}
          style={
            color === item.value
              ? { background: "#085ff7", color: "white" }
              : { background: "transparent", color: "#085ff7" }
          }
          onClick={onChange}
        >
          {item.value}
        </RatingButton>
      ))}
    </div>
  );
};
