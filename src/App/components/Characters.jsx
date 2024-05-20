import { CharactersSection, Content, Card } from '../styles/Characters'
import { Article, Overlay } from '../styles/Main'

const Characters = () => {

    return (
        <>
            <CharactersSection>
                <Overlay />
                <Content>
                    <Article>
                        <h1>Main characters</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolore modi dolores facere, velit at libero provident inventore cum facilis fuga sit eligendi aperiam, dicta quae eius necessitatibus laborum minus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam nihil facilis a iste sit rerum ab voluptatem sapiente exercitationem? Obcaecati repellat reprehenderit vero veniam placeat soluta amet veritatis eius.
                        </p>
                    </Article>
                    <Article>
                        <Card src='https://i.pinimg.com/originals/6a/1d/61/6a1d6145a724f70e825f1ed43f2579f2.jpg' />
                        <Card src='https://th.bing.com/th/id/OIP.g0q3ekIMpbgQEi37K4ylZwAAAA?pid=ImgDet&rs=1' />
                        <Card src='https://img.wattpad.com/2351e3ef89ca1c985fa9ecd9cbe8184df9c5afdd/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f314132494a6932477754773533673d3d2d313034323038383533352e3136366438663233643430336136663331373238313138373537312e6a7067?s=fit&w=720&h=720' />
                        <Card src='https://th.bing.com/th/id/R.afbf18ed63716918808b0dede689cac9?rik=0bq4RZUtkW9leg&pid=ImgRaw&r=0' />
                        <Card src='https://i.pinimg.com/originals/f6/70/53/f67053abf34da23cf3f76a89b615c62e.jpg' />
                        <Card src='https://img.wattpad.com/4d3b39c3f0bb2335184d8e96ecc9be3dc2c65a7b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f796e3533314d384e6f4e387043413d3d2d313034323038383533352e313636643866333539303831663331633138393139353236303734352e6a7067?s=fit&w=720&h=720' />
                    </Article>
                </Content>

            </CharactersSection>
        </>
    )
}

export default Characters