import { SectionWrapper, Container } from "./styled/Container.styled"

export default function Dashboard({user}) {
    return (
        <SectionWrapper>
            <Container>
                <h1 style={{marginTop: "60px"}}>Dashboard</h1>
                <p>Welcome {user.user_id}</p>
            </Container>
        </SectionWrapper>
    )
} 