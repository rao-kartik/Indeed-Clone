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