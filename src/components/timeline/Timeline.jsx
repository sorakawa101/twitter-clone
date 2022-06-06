import React from 'react'
import { collection, getDocs } from "firebase/firestore";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";


import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from '../../firebase.js';

const Timeline = () => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
        console.log(querySnapshot);
    });

    return (
        <div className="timeline">
            {/* Header */}
            <div className="timeline_header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post
                displayName="Shunay Sasakawa"
                username="sorakawa101"
                verified={true}
                text="First Tweet"
                avatar="https://source.unsplash.com/random"
                image="https://source.unsplash.com/random"
            />
        </div>
    )
}

export default Timeline
