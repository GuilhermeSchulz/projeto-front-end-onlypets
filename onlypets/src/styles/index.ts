import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    list-style:none;
    box-sizing: border-box;
}
button{
    cursor:pointer;
    transition: 0.5s;
}
:root{
    --color-primary-1: #671D76;
    --color-primary-2: #1B051C;
    --color-primary-hover: #320D38;

    --color-secondary-1:#F6DF51;
    --color-secondary-hover: #F8E77B;

    --grey-0: #3F3A3E;
    --grey-1: #69626A;
    --grey-2: #9FA09A;
    --grey-3: #C2C2B8;
    --grey-4: #E6E4D7;
    --grey-5: #F5F4EF;

    --white: #FFFFFF;

    --font-title-1:'Baroneys', sans-serif;
    
    --title-size-1: 36px;
    --title-size-2: 32px;
    --title-size-3: 24px;

    --text-size-1: 20px;
    --text-size-2: 16px;
    --text-size-3: 12px;

    --main-title-size: 48px;
    --main-title-mobile-size: 24px;

    --text-weight-1: 700;
    --text-weight-2: 400;
}
`;
