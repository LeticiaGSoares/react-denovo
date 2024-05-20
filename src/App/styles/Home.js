import {styled} from 'styled-components'
import bgHome from '../../assets/images/bg-home.gif'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${bgHome});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    position: relative;
    z-index: -1; 
`




