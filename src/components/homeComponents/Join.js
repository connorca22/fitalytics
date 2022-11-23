import { Container, Flex, SectionWrapper } from "../styled/Container.styled"
import { Link } from "react-router-dom"
import { Btn } from "../styled/Home.styled"


//Join us section on home page linking to Sign up page. Loaded into Home.js

export default function Join() {

    return (
        <SectionWrapper bg="#A8BBB0">
            <Container>
                <Flex fd="column" ai="center" jc="space-around">
                    <h1 style={{marginBottom: "20px", marginTop: "10px"}}>JOIN TODAY</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px", width: "70%"}}>Whether you're just beginning your fitness journey, or you're an elite level athlete - Fitalytics will turbocharge your progress towards your goals. Sign up today free of charge and gain access to all the tools you need to start making progress.</p>
                    <Btn><Link to="/sign-up" style={{textDecoration: "none", color: "black"}}>SIGN UP</Link></Btn>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}