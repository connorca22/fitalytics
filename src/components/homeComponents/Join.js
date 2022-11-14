import { Container, Flex } from "../styled/Container.styled"
import { Link } from "react-router-dom"
import { SectionWrapper, Btn } from "../styled/Home.styled"

export default function Join() {

    return (
        <SectionWrapper>
            <Container>
                <Flex fd="column" ai="center" jc="space-around">
                    <h1 style={{marginBottom: "20px", marginTop: "10px"}}>JOIN TODAY</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px", width: "70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Btn><Link to="/sign-up" style={{textDecoration: "none", color: "black"}}>SIGN UP</Link></Btn>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}