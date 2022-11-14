import { SectionWrapper, HeaderContainer } from "../styled/Home.styled"

export default function HomeHeader() {
    return (
    <SectionWrapper bg='pink' marginTop="60px">
        <HeaderContainer>
            <div style={{width: "50%", border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white"}}>
                <h1 style={{margin: "15px 15px"}}>FITALYTICS</h1>
                <p style={{margin: "15px 15px", marginBottom: "15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </HeaderContainer>
    </SectionWrapper>
    )
}