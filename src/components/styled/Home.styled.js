import styled from 'styled-components'

export const Nav = styled.nav`
position: fixed;
width: 100%;
top: 0;
border-bottom: 1px solid black;
z-index: 1;
background-color: grey;
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
    min-height: 400px;
    justify-content: space-around;
`

export const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 10px;
    border-radius: 3px;
    background-color: ${({bg}) => bg};

    h4 {
        font-size: 1.4em;
        padding-top: 15px;
    }

    p {
        margin: 0px 25px 15px 25px;
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
    margin-bottom: 10px;
    font-size: 1.3em;
    border: none;
    border-bottom: 1px solid black;
    padding-left: 5px;
}
input[type="submit"] {
    border: none;
}
::placeholder { 
    color: black;
    opacity: 0.6; 
}
`