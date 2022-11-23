import styled from 'styled-components'

export const Nav = styled.nav`
position: fixed;
width: 100%;
top: 0;
border-bottom: 1px solid black;
z-index: 1;
background-color: black;
`

export const NavContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px;
    min-width: 350px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    font-family: 'Poppins';
`

export const NavUl = styled.ul`
    display: flex;
    list-style: none;
`

export const NavLi = styled.li`
    margin-left: 30px;
    text-decoration: none;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 350px;
    justify-content: space-around;
    background-color: ${({bg}) => bg};

    div {
        width: 70%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;

        @media screen and (max-width: 450px) {
            width: 90%;
        }
    }
`

export const FeatureContainer = styled.div`
    display: flex; 
    text-align: center;
    flex-wrap:wrap;
    flex-direction: ${({fd}) => fd};
    justify-content: ${({jc}) => jc};
    align-items: ${({ai}) => ai};
    align-content: ${({ac}) => ac};
    margin: ${({margin}) => margin};
    border: ${({border}) => border};
    padding: ${({padding}) => padding};
    height: ${({height}) => height};
    padding-bottom: 5%;

`

export const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 10px;
    border-radius: 3px;
    background-color: ${({bg}) => bg};
    width: 22%;
    max-height: 254px;

    @media screen and (min-width: 490px) and (max-width: 890px) {
        width: 45%;
        max-height: 300px;
    }

    @media screen and (max-width: 489px) {
        width: 90%;
        max-height: 500px;
    }

    h4 {
        font-size: 1.4em;
        padding: 10px 0 5px 0;
    }

    p {
        margin: 0px 25px 15px 25px;

        @media screen and (min-width: 450px) and (max-width: 749px) {
            margin: 0px 5px 15px 5px
        }
    }

    img {
        max-width: 80%;
        margin-top: 25px;
        border-radius: 2px;
    }

`

export const Btn = styled.button`
    width: 60%;
    padding: 8px 0px 8px 0px;
    font-size: 1.5em;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    margin-top: 20px;

    @media screen and (min-width: 750px) {
        width: 40%;
        margin-top: 35px;
    }

`


export const Form = styled.form`
    padding: 15px;
    text-align: center;
    border-radius: 3px;
    margin-bottom: 30px;

    input, textarea {
        width: 100%;
        margin-bottom: 10px;
        font-size: 1.3em;
        border: 1px solid black;
        padding-left: 5px;
    }
    ::placeholder { 
    color: black;
    opacity: 0.6; 
  }
`

export const AuthForm = styled.form`
padding: 15px;
text-align: center;
border-radius: 3px;
margin: 30px 15%;

input {
    width: 100%;
    margin-bottom: 15px;
    font-size: 1.3em;
    border: none;
    border-bottom: 1px solid black;
    padding-left: 5px;
}
input[type="submit"] {
    border: none;
    margin-top: 10px;
}
::placeholder { 
    color: black;
    opacity: 0.6; 
}
`