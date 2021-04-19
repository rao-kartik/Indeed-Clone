import React, { createContext, useState } from 'react'
import { useSelector } from 'react-redux';

export const SortContext = createContext();

export const SortContextProvider = ({ children }) => {

    var data = useSelector(state=> state.findReducer.data);
    // console.log(data)

    const [ sortByLoc, setSortByLoc ] = useState(null);
    const [ sortByJobType, setSortByJobType ] = useState(null);
    const [ sortByDays, setSortByDays ] = useState(null);

    const handleFilterChange = (e)=>{
        const { value } = e.target;
        setSortByLoc(value);
        setSortByJobType(value);
        setSortByDays(value);
    }
    
    const filterConditionLoc = (item)=>{
        if(sortByLoc === null){
            return item;
        }
        if( item.location === sortByLoc ){
            return item;
        }
        if(setSortByJobType === null ){
            return item;
        }
        if (item.job_type === sortByJobType){
            return item;
        }
    }

    const value = {
        handleFilterChange,
        filterConditionLoc
    }
    
    return (
        <SortContext.Provider value={value}>
            { children }
        </SortContext.Provider>
    )
}



// if(filterCond.datePosted){
//     console.log(filterCond.datePosted)
//     data = data.filter(item=> {
//         const month = publication_date[5] + publication_date[6]

//         const date = publication_date[8] + publication_date[9]

//         let days;

//         month == '02' ? days = 28 : 
//         month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12' ? days= 31 : 
//         days = 30;

//         const totalTime = +date + days;

//         if(totalTime < filterCond.datePosted){
//             return item;
//         }
//     })
// } 