import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', arial, sans-serif;
    // border: 1px solid black;
}
img {
    max-width: 100%;
}
`

export default GlobalStyles