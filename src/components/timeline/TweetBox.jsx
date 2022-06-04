import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";

import "./TweetBox.css";

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <Avatar />
                <input
                    placeholder="いまどうしてる？"
                    type="text"
                ></input>
                </div>
                <input
                className="tweetBox_imageInput"
                placeholder="画像のURLを入力してください"
                type="text"
                ></input>

                <Button
                className="tweetBox_tweetButton"
                type="submit"
                >
                ツイートする
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
