import React, { useEffect,useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {Button,Input,H1,P,Label} from '../../Custom UI/ACustomUI';
import style from './CompanySearch.module.css';
import Select from 'react-select'
import styled from 'styled-components'
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { companiesRequest, companiesSuccess, companiesFailure } from "../../Redux/company/action";

export const CompanySearch=()=>{
    useEffect(()=>{
        document.title = 'Find the Best Companies Hiring Now | Indeed.com';
    });
    // const options = [
    //     { value: 'Amazon', label: 'Amazon' },
    //     { value: 'Google', label: 'Google' },
    //     { value: 'Facebook', label: 'Facebook' }
    //   ]
    const[options,setOptions] = React.useState([]);
      const dispatch = useDispatch();
  const { isLoading, isError,companies } = useSelector(
    (state) => state.company,
    shallowEqual
  );

  const getData = () => {
    const requestAction = companiesRequest();
    dispatch(requestAction);
    axios
      .get("https://json-server-mocker-ajmal.herokuapp.com/companies")
      .then((res) => {
        const successAction = companiesSuccess(res.data);
        dispatch(successAction);
        // console.log(res.data);
      })
      .catch((err) => {
        const failureAction = companiesFailure(err);
        dispatch(failureAction);
      });
  };
  useEffect(()=>{
      getData();
    //   setOptions()
    // setOptions(companies.map((element)=>({options:element.company_name})));
      // console.log(options);
  },[])
  const [searchText,setSearchText] = useState('');
  const history = useHistory();
  const handleSearch=()=>{
      history.push(`/companies/search/${searchText}`);
  }
  const [ catDisp, setCatDisp ] = useState(false);
  const [ catInp, setCatInp ] = useState('');
  const [ cityInp, setCityInp ] = useState('');
  const [ cityDisp, setCityDisp ] = useState(false)
  const setCategory = value => {
    setCatInp(value);
    setCatDisp(false);
}
const clickCat = ()=>{
  setCatDisp(true);
  setCityDisp(false);
}
  const Opt = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 0 10px;

  &:hover {
      background: #949494;
      cursor: pointer;
  }
`;
const AutoSuggestions = styled.div`
    position: absolute;
    width: 20rem;
    padding: 1rem;
    line-height: 30px;
    top: 150px;
    border: 0.0625rem solid #949494;
    border-radius: .5rem;
    background: #fff;
    z-index: 5;
    font-size: 14px;
    box-shadow: 0 0 0 1px #949494;
`;
const category = [
  { category:'DevOps / Sysadmin' },
  { category:'Finance / Legal' },
  { category:'Software Development' },
  { category:'Writing' },
  { category:'QA' },
  { category:'Human Resources' },
  { category:'Data' },
  { category:'Business' },
  { category:'Product' },
  { category:'Sales' },
  { category:'Marketing' },
  { category:'Design' },
  { category:'Customer Service' },
  { category:'All others' }
]
    return(
        <div className={style.container}>
            <H1>Find great places to work</H1>
            <P>Discover millions of company reviews</P>
            <div style={{marginTop:'3%'}}>
                <div>
                {/* <Label>
                    Company name or job title */}
                    <Input className={style.inputCompany} onChange={(e)=>setSearchText(e.target.value)} placeholder='Enter a company name' onClick={clickCat}/><br/>
                    {/* {
                            catDisp && (
                                <AutoSuggestions onClick={()=>setCatDisp(false)} >
                                    {
                                        options.filter(( {category} )=>options.indexOf(catInp) > -1 ).map(cat => <Opt onClick={()=> setCategory(cat.options)} >{cat.options}</Opt>)
                                    }
                                </AutoSuggestions>
                            )
                        } */}
                    <Link to='/career/salaries' style={{ textDecoration: 'none',color:'#085ff7',fontSize:'13px' }}>Do you want to search for salaries?</Link>
                    {/* <Select options={options} placeholder='Enter a company name' components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} style={{width:'150px'}}/> */}
                {/* </Label> */}
                </div>
                <div>
                {/* <Label>
                    City, state, or zip (optional)
                    <Input className={style.inputLocation}/>
                     
                {/* </Label> */}
                </div>
                <div style={{marginTop:'1%',textAlign:'center'}}>
                    <Button onClick={handleSearch}>Find Companies</Button>
                    
                </div>
            </div>           
        </div>
    )
}