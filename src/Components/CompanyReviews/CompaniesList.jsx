import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";
import { CompaniesListItem } from "./CompaniesListItem";

export const CompanyList=({type})=>{
  console.log(type);
    const dispatch = useDispatch();
  const { isLoading, isError,companies } = useSelector(
    (state) => state.company,
    shallowEqual
  );

  const getData = () => {
    const requestAction = companiesRequest();
    dispatch(requestAction);
    axios
      .get("https://compdetails-indeed.herokuapp.com/companies")
      .then((res) => {
        const successAction = companiesSuccess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const failureAction = companiesFailure(err);
        dispatch(failureAction);
      });
  };
  useEffect(()=>{
      getData();
  },[])
    return(
      <div style={{width:'70%',margin:'auto',marginTop:'20px',backgroundColor:'#fff'}}>
        <div style={{display:"flex"}}>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZEMDAzQTsiIGQ9Ik0yNTYsMEMxNTYuNjk4LDAsNzYsODAuNyw3NiwxODBjMCwzMy42LDkuMzAyLDY2LjMwMSwyNy4wMDEsOTQuNTAxbDE0MC43OTcsMjMwLjQxNA0KCWMyLjQwMiwzLjksNi4wMDIsNi4zMDEsMTAuMjAzLDYuOTAxYzUuNjk4LDAuODk5LDEyLjAwMS0xLjUsMTUuMy03LjJsMTQxLjItMjMyLjUxNkM0MjcuMjk5LDI0NC41MDEsNDM2LDIxMi40MDEsNDM2LDE4MA0KCUM0MzYsODAuNywzNTUuMzAyLDAsMjU2LDB6IE0yNTYsMjcwYy01MC4zOTgsMC05MC00MC44LTkwLTkwYzAtNDkuNTAxLDQwLjQ5OS05MCw5MC05MHM5MCw0MC40OTksOTAsOTANCglDMzQ2LDIyOC45LDMwNi45OTksMjcwLDI1NiwyNzB6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTUwMDI3OyIgZD0iTTI1NiwwdjkwYzQ5LjUwMSwwLDkwLDQwLjQ5OSw5MCw5MGMwLDQ4LjktMzkuMDAxLDkwLTkwLDkwdjI0MS45OTENCgljNS4xMTksMC4xMTksMTAuMzgzLTIuMzM1LDEzLjMtNy4zNzVMNDEwLjUsMjcyLjFjMTYuNzk5LTI3LjU5OSwyNS41LTU5LjY5OSwyNS41LTkyLjFDNDM2LDgwLjcsMzU1LjMwMiwwLDI1NiwweiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="hiring_logo" style={{width:'20px'}}/>
        {type==='hiringnow'&&<h3 style={{fontSize:'23px'}}>Companies Hiring Now</h3>}
        {type==='popular'&&<h3 style={{fontSize:'23px'}}>Popular Companies</h3>}    
        </div>
        <div style={{display:'grid',gridTemplateColumns:'auto auto auto'}}>
            
            {companies.map(item=>
              <CompaniesListItem item={item}/>)}
              
      </div>
        </div>
    )
}