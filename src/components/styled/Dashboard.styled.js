import styled from 'styled-components'

export const FormInputFlex= styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: ${({jc}) => jc};
    flex-direction: ${({fd}) => fd};
    margin: 10px 20px;
    padding: 3px;
    align-items: center;
    text-align: left;

    h3 {
        margin-left: 5%;
    }
    input, select {
        margin-right: 5%;
        padding: 5px;
        border: none;
        min-width: 20%;
        font-size: 1.1em;
    }
    textarea {
        width: 100%;
        border: none;
        font-size: 1.2em;
        padding: 3% 0 0 5%;
    }
    input[type='submit'] {
        margin-right: 0;
        width: 80%;
        border: none;
    }
`

export const WorkoutForm = styled.form`

`



export const WorkoutCardContainer= styled.div`
    display: flex;
    flex-direction: ${({fd}) => fd};
    border: ${({border}) => border};
    justify-content: ${({jc}) => jc};
    flex-basis: ${({fb}) => fb};
    align-items: ${({ai}) => ai};
    text-align: ${({ta}) => ta};
    margin: ${({margin}) => margin};
    background-color: #EBE8E0;

    
    img {
        padding: 3%;
        max-width: 30%;
        max-height: 100%;

        @media screen and (max-width: 520px) {
            max-width: 70%;
        }
    }

    @media screen and (max-width: 520px) {
        flex-direction: column
    }

    button {
        padding: 7px 17px;
        margin-top: 5%;
        margin-right: 15px;
        align-self: center;

        @media screen and (max-width: 520px) {
            margin: 10px;
        }
    }

`

export const WorkoutCardFlex= styled.div`
    display: flex;
    flex-direction: ${({fd}) => fd};
    border: ${({border}) => border};
    justify-content: ${({jc}) => jc};
    flex-basis: ${({fb}) => fb};
    align-items: ${({ai}) => ai};
    text-align: ${({ta}) => ta};
    margin: ${({margin}) => margin};


    @media screen and (max-width: 520px) {
        width: 80%;
        align-items: center;
    }

    h4 {
        display: inline;
    }
    p {
        display: inline;
    }
    div {
        margin-top: 1.5%;
    }

`

export const LadderCard = styled.div`
    display: flex; 
    text-align: center;
    flex-direction: ${({fd}) => fd};
    justify-content: ${({jc}) => jc};
    align-items: ${({ai}) => ai};
    align-content: ${({ac}) => ac};
    margin-bottom: ${({mb}) => mb};
    border: 1px solid black;
    padding: 1%;
    margin: 0 2% 2% 2%;

    
    h2 {
        border: 1px solid black;
        padding: 1%;
        flex-basis: 5%;
    }
    h3 {

    }

    div {
        flex-basis: 30%;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 4%;

    }

`

export const LadderCardContent = styled.div`
    display: flex; 
    text-align: center;
    flex-direction: ${({fd}) => fd};
    justify-content: ${({jc}) => jc};
    align-items: ${({ai}) => ai};
    align-content: ${({ac}) => ac};
    margin: ${({margin}) => margin};
    border: ${({border}) => border};
    flex-wrap: wrap;

    @media screen and (max-width: 635px) {
        justify-content: center;
    }
`