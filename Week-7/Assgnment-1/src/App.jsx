import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  

  return (
    <>
      <ProfileCard 
        name={"Jon Snow"} 
        age={32} 
        city={"Dragonstone"}
        followers={"80k"}
        likes={"803k"}
        photos={"1.4k"}
        profileImage={'profile.jpeg'}
        bannerImage={'banner.jpeg'} />
    </>
  )
}

export default App
