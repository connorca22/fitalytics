import { Container, Flex } from "../styled/Container.styled"
import { Link } from "react-router-dom"

export default function Join() {

    return (
        <Container>
            <Flex fd="column">
                <h1 style={{marginBottom: "20px", marginTop: "10px"}}>WHY FITALYTICS?</h1>
                <Flex ai="center">
                    <h1 style={{margin: "15px 15px"}}>FITALYTICS</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/sign-up"><button>Hello</button></Link>
                </Flex>
            </Flex>
        </Container>
    )
}