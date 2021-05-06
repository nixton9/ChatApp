import { createGlobalStyle } from 'styled-components'
import { device } from './theme'
import { fadeIn } from './animations'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // Remove the blue highlight everytime we click on something on mobile
        -webkit-tap-highlight-color: transparent;
    }

    *:focus{
        outline: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

        @media ${device.mobileL} {
            font-size: 60.5%;
        }

        @media ${device.mobile} {
            font-size: 59%;
        }

        @media ${device.mobileS} {
            font-size: 57%;
        }

        @media ${device.mobileXS} {
            font-size: 53%;
        }
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily};
        background: ${({ theme }) => theme.background};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    button, input, textarea {
        border: none;
        font-family: ${({ theme }) => theme.fontFamily};
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .mbl-click:hover:after,.mbl-click:active:after {
        content: '';
        width: 150%;
        height: 150%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.background};
        border-radius: ${({ theme }) => theme.mainBorderRadius};
        animation: ${fadeIn} .4s ease forwards;
        z-index: -1;
    }

    .mbl-click-inv:hover:after, .mbl-click-inv:active:after {
        background-color: ${({ theme }) => theme.lightBackground};
    }

    .expand-clickable-area {
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150%;
            height: 150%;
            border-radius: 50%;
        }
    }

    .emoji-mart {
        position: fixed;
        bottom: 12rem;
        border: none;
        box-shadow: ${({ theme }) => theme.mainBoxShadow};
        z-index: 11;
    }

    .emoji-mart-preview {
        display: none;
    }


    /* SCROLLBAR */

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.lightBackground};
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.text2};
    }
    `
