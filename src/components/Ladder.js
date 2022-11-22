import { useState, useEffect } from "react"
import { SectionWrapper, Container, Flex } from "./styled/Container.styled"
import { LadderCard, LadderCardContent } from "./styled/Dashboard.styled"
import { getOverallLadder } from "../services/ladderServices"

export default function Ladder() {

    const [ladder, setLadder] = useState([])

    useEffect(() => {
        getOverallLadder()
        .then((ladder) => {
            setLadder(ladder)
        })
    }, [])

    return (
        <SectionWrapper style={{marginTop: "60px"}}>
            <Container>
                <Flex fd="column" border="1px solid black" margin="0 7% 0 7%">
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
    )
} 