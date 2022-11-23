import { HeaderContainer } from "../styled/Home.styled"
import { SectionWrapper, Container } from "../styled/Container.styled"


//Header section on the home page. Loaded into Home.js
export default function HomeHeader() {
    return (
    <SectionWrapper marginTop="60px" bg="#A8BBB0">
        <Container>
            <HeaderContainer>
                <div style={{backgroundColor: "#EBE8E0", padding: "25px"}}>
                    <h1 style={{margin: "15px 15px"}}>FITALYTICS</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px"}}>A suite of tools that empower you to live a healthier, stronger, more athletic life. Record your workouts, build consistency in your fitness, track your progress across time, and bring competitive fun back into your exercise routines.</p>
                </div>
            </HeaderContainer>
        </Container>
    </SectionWrapper>
    )
}