import React, { useState, useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  companiesRequest,
  companiesSuccess,
  companiesFailure,
} from "../../Redux/company/action";
import {
  OptionButtonLeft,
  OptionButtonRight,
  SelectButton,
  Button,
} from "../../Custom UI/ACustomUI";
import style from "./Reviews.module.css";
import { Popup } from "../CompanyReviews/popup";
import { ReviewsRateTop } from "./ReviewsRateTop";
import { ReviewsRateBottom } from "./ReviewsRateBottom";
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
`;
const MainContainer = styled.div`
  background-color: #f5f5f5;
`;
export const Reviews = () => {
  document.title = "Please help answer these questions about HP | Indeed.com";
  const compname = useParams();
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.company, shallowEqual);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const handleContinue = () => {
    history.push(`/companies/review/survey/${compname.id}`);
  };

  const getData = () => {
    const requestAction = companiesRequest();
    dispatch(requestAction);
    axios
      .get("https://json-server-mocker-ajmal.herokuapp.com/companies", {
        params: {
          company_name: compname.id,
        },
      })
      .then((res) => {
        const successAction = companiesSuccess(res.data[0].company_logo);
        dispatch(successAction);
      })
      .catch((err) => {
        const failureAction = companiesFailure(err);
        dispatch(failureAction);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [recoColor, setRecoColor] = React.useState();
  const onChangeReco = (e) => {
    const { value } = e.target;
    setRecoColor(Number(value));
  };
  const [fair, setFair] = React.useState();
  const onChangeFair = (e) => {
    const { value } = e.target;
    setFair(Number(value));
  };
  const [salary, setSalary] = React.useState();
  const onChangeSalary = (e) => {
    const { value } = e.target;
    setSalary(Number(value));
  };
  const [cult, setCult] = React.useState([]);
  const onChangeCult = (e) => {
    const { value } = e.target;
    if (cult.includes(Number(value))) {
      setCult(cult.filter((item) => item !== Number(value)));
    } else {
      setCult([...cult, Number(value)]);
    }
  };

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
  return isAuth ? (
    <MainContainer>
      <div className={style.container}>
        <FlexContainer>
          <div>
            <LogoImg src={companies} alt="company_logo" />
          </div>
          <TopDiv>
            <span style={{ fontSize: "22px" }}>
              Please help answer these questions about {compname.id}
            </span>
            <br />
            <span style={{ fontSize: "14px" }}>
              Your honest responses help other job seekers and it’s anonymous{" "}
            </span>
            <button onClick={togglePopup} className={style.icon}></button>
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
        <div>
          <H1>Would you recommend working at {compname.id} to a friend?</H1>
          <OptionButtonLeft
            value={1}
            style={
              recoColor === 1
                ? { background: "#085ff7", color: "white" }
                : { background: "transparent", color: "#085ff7" }
            }
            onClick={onChangeReco}
          >
            Yes
          </OptionButtonLeft>
          <OptionButtonRight
            value={2}
            style={
              recoColor === 2
                ? { background: "#085ff7", color: "white" }
                : { background: "transparent", color: "#085ff7" }
            }
            onClick={onChangeReco}
          >
            No
          </OptionButtonRight>
        </div>
        <div>
          <H1>Do you think you are paid fairly at {compname.id}?</H1>
          <OptionButtonLeft
            value={1}
            style={
              fair === 1
                ? { background: "#085ff7", color: "white" }
                : { background: "transparent", color: "#085ff7" }
            }
            onClick={onChangeFair}
          >
            Yes
          </OptionButtonLeft>
          <OptionButtonRight
            value={2}
            style={
              fair === 2
                ? { background: "#085ff7", color: "white" }
                : { background: "transparent", color: "#085ff7" }
            }
            onClick={onChangeFair}
          >
            No
          </OptionButtonRight>
        </div>
        <div>
          <H1>
            Do you feel like your salary at {compname.id} is enough for the cost
            of living in your area?
          </H1>
          <OptionButtonLeft
            value={1}
            style={
              salary === 1
                ? { background: "#085ff7", color: "white" }
                : { background: "transparent", color: "#085ff7" }
            }
            onClick={onChangeSalary}
          >
            Yes
          </OptionButtonLeft>
          <OptionButtonRight
            value={2}
            style={
              salary === 2
                ? { background: "#085ff7", color: "white" }
                : { background: "transparent", color: "#085ff7" }
            }
            onClick={onChangeSalary}
          >
            No
          </OptionButtonRight>
        </div>
        <div style={{ height: "200px" }}>
          <H1>How would you describe the work culture at {compname.id}?</H1>
          <p>Choose all that are applicable:</p>
          {work_culture.map((item) => (
            <SelectButton
              value={item.id}
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
        </div>
        <ReviewsRateTop compname={compname.id} />
        <ReviewsRateBottom compname={compname.id} />
        <div style={{ textAlign: "center", height: "100px" }}>
          <Button
            style={{ width: "300px", marginTop: "20px" }}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
      <Footer />
    </MainContainer>
  ) : (
    <Redirect to="/account/login" />
  );
};
