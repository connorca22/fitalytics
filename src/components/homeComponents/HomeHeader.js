import { HeaderContainer } from "../styled/Home.styled"
import { SectionWrapper, Container } from "../styled/Container.styled"


//Header section on the home page. Loaded into Home.js
export default function HomeHeader() {
    return (
    <SectionWrapper marginTop="60px">
        <Container>
            <HeaderContainer>
                <div>
                    <h1 style={{margin: "15px 15px"}}>FITALYTICS</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px"}}>Join the FITALYTICS community! We build a suite of tools that empower you to live a healthier, stronger, more athletic life. Record your workouts, build consistency in your fitness, track your progress across time, and bring competitive fun back into your exercise routines.</p>
                </div>
            </HeaderContainer>
        </Container>
    </SectionWrapper>
    )
}