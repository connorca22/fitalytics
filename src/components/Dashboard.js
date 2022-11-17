import { SectionWrapper, Container } from "./styled/Container.styled"
import { useGlobalState } from "../utils/stateContext";


export default function Dashboard() {
    
    const {store} = useGlobalState();
    const {currentUser} = store;

    return (
        <SectionWrapper>
            <Container>
                <h1 style={{marginTop: "60px"}}>Dashboard</h1>
                <p>Welcome {currentUser}</p>
            </Container>
        </SectionWrapper>
    )
} 