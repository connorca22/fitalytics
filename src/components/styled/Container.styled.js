import styled from 'styled-components'

export const Container = styled.div`
max-width: 1100px;
margin: 0 auto;
padding: 30px;
min-width: 350px;
background-color: ${({bg}) => bg};
height: ${({height}) => height};
display: ${({display}) => display};
justify-content: ${({justifyContent}) => justifyContent};
align-items: ${({alignItems}) => alignItems};
`
