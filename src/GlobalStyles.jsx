import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --Neutral-130: #0B0C0D;
        --Neutral-120: #303133;
        --Neutral-110: #515255;
        --Neutral-100: #818388;
        --Neutral-90: #A1A3AA;
        --Neutral-80: #C2C4CC;
        --Neutral-70: #E6E9F2;
        --Neutral-60: #FCFDFF;
        --Info-100: #2348B1;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;