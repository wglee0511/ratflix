import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
    }
    body{
        
        font-size:14px;
        background-color:${theme.BgColor};
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
  .flex-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
   /*Loader*/
 
  .spinner {
    animation: rotator 1.4s linear infinite;
  }
  
  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  }
  
  @keyframes colors {
    0% {
      stroke: #4285f4;
    }
    25% {
      stroke: #de3e35;
    }
    50% {
      stroke: #f7c223;
    }
    75% {
      stroke: #1b9a59;
    }
    100% {
      stroke: #4285f4;
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
  

  
  
}`;

export default GlobalStyles;
