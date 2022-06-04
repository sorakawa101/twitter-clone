import { Search } from "@mui/icons-material";
import React from "react";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <Search className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                {/* ライブラリを追加・追記 */}
                {/* <TwitterTweetEmbed tweetId={"1475764828208009220"} /> */}
                <TwitterTweetEmbed tweetId={"1529119366637559808"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="LaplusDarknesss"
                options={{ height: 400 }}
                />
                <TwitterShareButton
                url={"https://twitter.com/LaplusDarknesss"}
                options={{ text: "#laplus_great", via: "LaplusDarknesss" }}
                />
            </div>
        </div>
    )
}

export default Widgets
