import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";

import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from '../../firebase';

const Timeline = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc")); // データの並び替え
        // getDocs(q).then((querySnapshot) => {
        //     setPosts(querySnapshot.docs.map((doc) => doc.data()))
        // });

        // リアルタイムでデータを取得
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="timeline">
            {/* Header */}
            <div className="timeline_header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            {posts.map((post) => (
                <Post
                key={post.text}
                displayName={post.dixplayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />
            ))}
        </div>
    )
}

export default Timeline
