import React from "react";
import styled from "styled-components";
import { RatingButton } from "../../Custom UI/ReviewsUI";

const H1 = styled.h1`
  font-size: 19.95px;
  margin: 0px 0px 15px;
  padding: 24px 0px 0px;
`;
const Container = styled.div`
  background-color: white;
  padding: 0px 24px 24px;
  margin: 5px;
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
export const ReviewsRateTop = ({ compname, type }) => {
  const [color, setColor] = React.useState();
  const onChange = (e) => {
    const { value } = e.target;
    setColor(value);
  };
  return (
    <Container>
      {type === "top" && (
        <H1>Please rate your overall interview experience at {compname}.</H1>
      )}
      {type === "bottom" && (
        <H1>
          Please rate the level of difficulty of your interview at {compname}.
        </H1>
      )}

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
    </Container>
  );
};
