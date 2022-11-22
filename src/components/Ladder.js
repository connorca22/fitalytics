import { SectionWrapper, Container, Flex } from "./styled/Container.styled"
import { LadderCard, LadderCardContent } from "./styled/Dashboard.styled"

export default function Ladder() {
    return (
        <SectionWrapper style={{marginTop: "60px"}}>
            <Container>
                <Flex fd="column" border="1px solid red" margin="0 7% 0 7%">
                    <h1>All Time Ladder</h1>
                    <LadderCard ai="center" jc="space-around" mb="1%">
                        <h2>#1</h2>
                        <LadderCardContent ai="center"><h3>USER:</h3><p>User43</p></LadderCardContent>
                        <LadderCardContent ai="center"><h3>WORKOUTS:</h3><p>18</p></LadderCardContent>
                    </LadderCard>
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 