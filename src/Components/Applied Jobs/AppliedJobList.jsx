import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteJob } from '../../Redux/MyJobs/action';
import { AppliedJobListItem } from './AppliedJobListItem';

export const AppliedJobList=({reviewsData})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDelete = (id) =>{
        dispatch(deleteJob(id))
        history.push('/appliedjobs')
    }
    return(
        <div>
            {
                reviewsData.map(item=><AppliedJobListItem key={item.id} {...item} handleDelete={handleDelete}/>)
            }
        </div>
    )
}