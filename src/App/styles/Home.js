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

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
`;
