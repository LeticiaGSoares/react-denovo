import { Container} from '../styles/Home'
import {Title, Text, Article, Overlay} from '../styles/Main'
import { BtnSection, MainBtn, KnowMoreBtn } from '../styles/Buttons'

const Home = () => {

    return (
        <Container>
            <Overlay/>
            <Article>
                <video src=""></video>
                <Title>Violet Evergarden</Title>
                <Text>Few knew about her existence. But those who did, said she was a weapon. Just a tool. And she had no heart.</Text>
                <BtnSection>
                <MainBtn>Watch Now</MainBtn>
                <KnowMoreBtn>Know More</KnowMoreBtn>
            </BtnSection>
            </Article>
            
        </Container>
    )
}

export default Home