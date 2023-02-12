import TinderCard from 'react-tinder-card'
import {useState} from 'react'
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {
    const char = [
        {
            name: 'Richard Hendricks',
            url: 'https://pixabay.com/get/gf5795c21e2853d4e3f4879a91fb8b79b1725e96e7ccd6db40efb2de6ee08b2162bc2af1d8badc86536e3bd4e2e52c744_1920.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://pixabay.com/get/gf5795c21e2853d4e3f4879a91fb8b79b1725e96e7ccd6db40efb2de6ee08b2162bc2af1d8badc86536e3bd4e2e52c744_1920.jpg'
        },
        {
            name: 'Monica Hall',
            url: 'https://pixabay.com/get/gf5795c21e2853d4e3f4879a91fb8b79b1725e96e7ccd6db40efb2de6ee08b2162bc2af1d8badc86536e3bd4e2e52c744_1920.jpg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://pixabay.com/get/gf5795c21e2853d4e3f4879a91fb8b79b1725e96e7ccd6db40efb2de6ee08b2162bc2af1d8badc86536e3bd4e2e52c744_1920.jpg'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://pixabay.com/get/gf5795c21e2853d4e3f4879a91fb8b79b1725e96e7ccd6db40efb2de6ee08b2162bc2af1d8badc86536e3bd4e2e52c744_1920.jpg'
        }
    ]




    const characters = char
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

return(
    <div className="dashboard">
        <ChatContainer/>
        <div className="swipe-container">
            <div className="card-container">

                {characters.map((character) =>
                    <TinderCard className='swipe'
                                key={character.name}
                                onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                                <div style={{ backgroundImage: 'url(' + character.url + ')' }}
                                     className='card'
                                >
                                    <h3>{character.name}</h3>
                                </div>
                    </TinderCard>
                )}

                <div className="swipe-info">
                    {lastDirection ? <p>You Swiped {lastDirection}</p> : <p/> }
                </div>
            </div>
        </div>
    </div>

)
}
export default Dashboard