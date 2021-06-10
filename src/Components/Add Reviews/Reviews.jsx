import React, { useState, useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyLogo } from "../../Redux/company/action";
import {
  OptionButtonLeft,
  OptionButtonRight,
  SelectButton,
  Button,
} from "../../Custom UI/ReviewsUI";
import styles from "./Reviews.module.css";
import { Popup } from "../CompanyReviews/popup";
import { ReviewsRateTop } from "./ReviewsRateTop";
import { Footer } from "./Footer";

const H1 = styled.h1`
  font-size: 19.95px;
  margin: 0px 0px 15px;
  padding: 24px 0px 0px;
`;
const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #f5f5f5;
`;
const TopDiv = styled.div`
  margin-top: 24px;
  margin-left: 15px;
`;
const FlexContainer = styled.div`
  display: flex;
  background-color: white;
  height: 138px;
  padding: 0px 24px 24px;
  margin: 5px;
  @media (max-width: 720px) {
    height: 178px;
  }
  @media (max-width: 630px) {
    height: 228px;
  }
`;
const MainContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 50px;
`;
const SpanLarge = styled.span`
  font-size: 22px;
`;
const SpanSmall = styled.span`
  font-size: 14px;
`;
const ContainerWorkCulture = styled.div`
  height: 200px;
  background-color: white;
  padding: 0px 24px 24px;
  margin: 5px;
  @media (max-width: 1000px) {
    height: 280px;
  }
  @media (max-width: 770px) {
    height: 325px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
`;
const BottomContainer = styled.div`
  text-align: center;
  height: 100px;
`;
const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const PanelDiv = styled.div`
  background-color: white;
  height: 138px;
  padding: 0px 24px 24px;
  margin: 5px;
  @media (max-width: 600px) {
    height: 178px;
  }
`;
export const Reviews = () => {
  document.title = "Please help answer these questions about HP | Indeed.com";
  const compname = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const company_logo = useSelector((state) => state.company.company_logo);
  const [isOpen, setIsOpen] = useState(false);
  const [recoColor, setRecoColor] = React.useState();
  const [fair, setFair] = React.useState();
  const [salary, setSalary] = React.useState();
  const [cult, setCult] = React.useState([]);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const work_culture = [
    { id: 1, title: "Relaxed" },
    { id: 2, title: "Fast-paced" },
    { id: 3, title: "Stressful" },
    { id: 4, title: "Collaborative" },
    { id: 5, title: "Competitive" },
    { id: 6, title: "Slow-paced" },
    { id: 7, title: "Not sure" },
  ];

  const handleContinue = () => {
    history.push(`/companies/review/survey/${compname.id}`);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onChangeReco = (e) => {
    const { value } = e.target;
    setRecoColor(Number(value));
  };

  const onChangeFair = (e) => {
    const { value } = e.target;
    setFair(Number(value));
  };

  const onChangeSalary = (e) => {
    const { value } = e.target;
    setSalary(Number(value));
  };

  const onChangeCult = (e) => {
    const { value } = e.target;
    if (cult.includes(Number(value))) {
      setCult(cult.filter((item) => item !== Number(value)));
    } else {
      setCult([...cult, Number(value)]);
    }
  };
  const recoFirend = [
    { component: OptionButtonLeft, number: 1, text: "Yes" },
    { component: OptionButtonRight, number: 2, text: "No" },
  ];
  const panels = [
    {
      id: 1,
      text: `Would you recommend working at here to a friend?`,
      style_condition: recoColor,
      onclick_text: onChangeReco,
    },
    {
      id: 2,
      text: "Do you think you are paid fairly?",
      style_condition: fair,
      onclick_text: onChangeFair,
    },
    {
      id: 3,
      text: "Do you feel like your salary is enough for the cost of living in your area?",
      style_condition: salary,
      onclick_text: onChangeSalary,
    },
  ];
  useEffect(() => {
    dispatch(getCompanyLogo(compname.id));
    window.scrollTo(0, 0);
  }, []);

  return isAuth ? (
    <MainContainer>
      <Container>
        <FlexContainer>
          <PanelDiv>
            <LogoImg src={company_logo} alt="company_logo" />
          </PanelDiv>
          <TopDiv>
            <SpanLarge>
              Please help answer these questions about {compname.id}
            </SpanLarge>
            <br />
            <SpanSmall>
              Your honest responses help other job seekers and it’s anonymous{" "}
            </SpanSmall>
            <button onClick={togglePopup} className={styles.icon}></button>
          </TopDiv>
          {isOpen && (
            <Popup
              content={
                <>
                  <span>
                    Your name and email address will NOT appear next to your
                    review. Please note, however, that Indeed may disclose your
                    information in response to legal process or requests. See
                    our Terms of Service for more information.
                  </span>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </FlexContainer>
        {panels.map((panelitem) => (
          <PanelDiv key={panelitem.id}>
            <H1>{panelitem.text}</H1>
            {recoFirend.map((item) => (
              <item.component
                value={item.number}
                key={item.number}
                style={
                  panelitem.style_condition === item.number
                    ? { background: "#085ff7", color: "white" }
                    : { background: "transparent", color: "#085ff7" }
                }
                onClick={panelitem.onclick_text}
              >
                {item.text}
              </item.component>
            ))}
          </PanelDiv>
        ))}
        <ContainerWorkCulture>
          <H1>How would you describe the work culture at {compname.id}?</H1>
          <p>Choose all that are applicable:</p>
          {work_culture.map((item) => (
            <SelectButton
              value={item.id}
              key={item.id}
              style={
                cult.includes(item.id)
                  ? { background: "#085ff7", color: "white" }
                  : { background: "transparent", color: "#085ff7" }
              }
              onClick={onChangeCult}
            >
              {item.title}
            </SelectButton>
          ))}
        </ContainerWorkCulture>
        <ReviewsRateTop compname={compname.id} type={"top"} />
        <ReviewsRateTop compname={compname.id} type={"bottom"} />
        <BottomContainer>
          <Button className={styles.buttonReview} onClick={handleContinue}>
            Continue
          </Button>
        </BottomContainer>
      </Container>
      <Footer />
    </MainContainer>
  ) : (
    <Redirect to="/account/login" />
  );
};
