import {styled} from 'styled-components'

export const Title = styled.h1`
    font-size:60px;
`

export const Text = styled.p`
    text-align: center;
    max-width: 600px;
`

export const Article = styled.div`
    width: 80%;
    min-width: 300px;
    max-width: 600px;
    display:flex;
    flex-direction: column;
    align-items:center;
    gap: 20px;
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