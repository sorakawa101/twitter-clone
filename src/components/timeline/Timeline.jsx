import React from 'react'

import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Timeline = () => {
    return (
        <div className="timeline">
            {/* Header */}
            <div className="timeline_header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Timeline
