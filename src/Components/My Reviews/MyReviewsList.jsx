import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteReview } from '../../Redux/MyReviews/action';
import { MyReviewsListItem } from './MyReviewsListItem';

export const MyReviewsList=({reviewsData})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDelete = (id) =>{
        dispatch(deleteReview(id))
        history.push('/myreviews')
    }
    return(
        <div>
            {
                reviewsData.map(item=><MyReviewsListItem key={item.id} {...item} handleDelete={handleDelete}/>)
            }
        </div>
    )
}