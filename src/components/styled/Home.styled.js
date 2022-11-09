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
    margin-left: 8px;
    text-decoration: none;
`

export const Header = styled.header`
    background-color: ${({bg}) => bg};
    margin-top: 60px;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 400px;
    justify-content: space-around;
    border: 1px solid black;
`