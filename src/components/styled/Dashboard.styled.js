import styled from 'styled-components'

export const FormInputFlex= styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: ${({jc}) => jc};
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

