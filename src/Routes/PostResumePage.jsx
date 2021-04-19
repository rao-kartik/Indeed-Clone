import React from 'react'
import { Profile } from '../Components/Profile/Profile'
import { ResumeOutput } from '../Components/Resume/ResumeOutput'

export const PostResumePage = () => {

    document.title = 'Indeed Resume';
    
    return (
        <div>
            <Profile />
        </div>
    )
}
