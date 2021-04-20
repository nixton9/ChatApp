import { createGlobalStyle } from 'styled-components'

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
    `
