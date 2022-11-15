import { SectionWrapper } from "./styled/Container.styled"

export default function Dashboard({user}) {
    return (
        <SectionWrapper>
            <h1 style={{marginTop: "60px"}}>Dashboard</h1>
            <p>Welcome {user.user_id}</p>
        </SectionWrapper>
    )
} 