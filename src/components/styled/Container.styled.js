import styled from 'styled-components'

export const FullHeightContainer = styled.div`
    height: 100%;
    background-color: ${({bg}) => bg};
`

export const SectionWrapper = styled.div`
    background-color: ${({bg}) => bg};
    margin-top: ${({marginTop}) => marginTop};
    height: ${({height}) => height};
`

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

export const Flex = styled.div`
    display: flex; 
    text-align: center;
    flex-direction: ${({fd}) => fd};
    justify-content: ${({jc}) => jc};
    align-items: ${({ai}) => ai};
    align-content: ${({ac}) => ac};
    margin: ${({margin}) => margin};
    border: ${({border}) => border};
    padding: ${({padding}) => padding};
    height: ${({height}) => height};
    background-color: ${({bg}) => bg};



    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin: ${({m}) => m};
    }
`
