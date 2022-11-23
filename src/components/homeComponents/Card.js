import {FeatureCard} from "../styled/Home.styled"

//Cards that contain image, header, and copy used in AppFeatures component, on home page.

export default function Card(props) {
    return (
    <FeatureCard>
        <img src={props.src} />
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
   </FeatureCard>
    )
}
