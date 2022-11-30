import React from 'react';
import ppp from './Profile.module.css'
import MyPosts from "./myPosts/myPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.stocksnap.io/img-thumbs/280h/Z28P4HBP06.jpg"/>
            </div>
            <div>
                ava+dicription
            </div>
            <MyPosts/>


        </div>

    )
}

export default Profile
