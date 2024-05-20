import {styled} from 'styled-components'

export const CharactersSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('https://images2.alphacoders.com/130/1309622.jpeg');
    padding-top: 104px;
    min-height: 100vh;
    position: relative;
    z-index: -1;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

export const Card = styled.img`
    width: 180px;
    border-radius: 10px
`