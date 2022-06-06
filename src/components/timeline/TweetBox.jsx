import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import "./TweetBox.css";
import db from '../../firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // firebaseのdbにデータを追加する
        e.preventDefault();

        addDoc(collection(db, "posts"), {
                displayName: "Sassa",
                username: "sorakawa101",
                verified: "true",
                text: tweetMessage,
                avatar: "https://source.unsplash.com/photos/92PmjawKUfs",
                image:tweetImage,
                timestamp: serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <Avatar />
                <input
                    value={tweetMessage}
                    placeholder="What's happening?"
                    type="text"
                    onChange={(e) => setTweetMessage(e.target.value)}
                ></input>
                </div>
                <input
                    value={tweetImage}
                    className="tweetBox_imageInput"
                    placeholder="画像のURLを入力してください"
                    type="text"
                    onChange={(e) => setTweetImage(e.target.value)}
                ></input>

                <Button
                    className="tweetBox_tweetButton"
                    type="submit"
                    onClick={sendTweet}
                >
                Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
