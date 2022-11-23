import { useState, useEffect } from "react"
import { SectionWrapper, Container, Flex } from "./styled/Container.styled"
import { LadderCard, LadderCardContent } from "./styled/Dashboard.styled"
import { getOverallLadder } from "../services/ladderServices"
import { FullHeightContainer } from "./styled/Container.styled"

//All time workouts ladder page 
export default function Ladder() {

    //create some state we'll store our ladder in. 

    const [ladder, setLadder] = useState([])
    
    //get's the rankings using ladderServices method. Stores in state. 
    useEffect(() => {
        getOverallLadder()
        .then((ladder) => {
            setLadder(ladder)
        })
    }, [])

    //maps through ladder and prints rankings to page.
    return (
        <FullHeightContainer bg="#A8BBB0">
        <SectionWrapper style={{marginTop: "60px"}}>
            <Container>
                <Flex fd="column" border="1px solid black" margin="0 5% 0 5%" bg="#EBE8E0">
                    <h1 style={{margin: "2% 0 2% 0"}}>All Time Ladder</h1>

                    {ladder.map((rank, index) => {
                        if (rank.total_workouts === 0) {return null}  
                        else {
                        return (
                            <LadderCard ai="center" jc="space-around" key={index}>
                            <h2>#{index + 1}</h2>
                            <LadderCardContent ai="center"><h3>USER:</h3><p>&nbsp;{rank.username}</p></LadderCardContent>
                            <LadderCardContent ai="center"><h3>WORKOUTS: </h3><p>&nbsp;{rank.total_workouts}</p></LadderCardContent>
                        </LadderCard>
                        )
                        }
                    })}
                </Flex>
            </Container>
        </SectionWrapper>
        </FullHeightContainer>
    )
} 