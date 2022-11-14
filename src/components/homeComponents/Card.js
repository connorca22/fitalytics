import {FeatureCard} from "../styled/Home.styled"

export default function Card(props) {
    return (
    <FeatureCard>
        <img src={props.src} />
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
   </FeatureCard>
    )
}
