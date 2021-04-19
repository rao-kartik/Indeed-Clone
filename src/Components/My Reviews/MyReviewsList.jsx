import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { deleteReview } from '../../Redux/MyReviews/action';
import { MyReviewsListItem } from './MyReviewsListItem';

export const MyReviewsList=({reviewsData})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [isRefresh,setIsRefresh] = useState(true);
    const handleDelete = (id) =>{
        dispatch(deleteReview(id))
        setIsRefresh(false)
    }
    return isRefresh?(
        <div>
            {
                reviewsData.map(item=><MyReviewsListItem key={item.id} {...item} handleDelete={handleDelete}/>)
            }
        </div>
    ):(<Redirect to='/myreviews'/>)
}