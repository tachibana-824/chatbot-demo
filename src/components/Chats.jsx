import React from "react";
import List from '@mui/material/List';
import { Chat } from "./index";
import { styled } from '@mui/system';

const StyledList = styled(List)({
    height: "400px",
    padding: "0",
    overflow: "auto",
});

const Chats = (props) => {
    return (
        <StyledList id={"scroll-area"}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index} />
            })}
        </StyledList>
    );
};

export default Chats;
