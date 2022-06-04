import React from "react";
import "./SidebarOption.css";

const  SidebarOption = (props) => {
    const { text, Icon, active } = props;
    return (
        <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
        <Icon />
        <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;