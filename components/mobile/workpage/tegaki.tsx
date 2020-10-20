import React from "react";
import styled from "@emotion/styled";

import globalCSS from "../../../styles/global";
import { Global } from "@emotion/core";



import workDataMap from "../../../constants/workdata";
import { Author } from "../../../constants/Types";

interface props{
    author: Author;
}

const Tegaki:React.FC<props> = ({author}) => {
    const img = workDataMap.get(author)?.handwritingImage
    return (
        <Wrapper>
            <Global styles={globalCSS}/>
            <HandWriting src={img}/>
        </Wrapper>
    )
};
export default Tegaki;

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:black;
    scroll-snap-align:start;
`;

const HandWriting = styled.img`
    width:100%;
`;