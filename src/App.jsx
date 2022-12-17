import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Cateogry from './components/Cateogry/cateogry'
import Tabs from './components/Tabs/Tabs'
import BannerImage from '../src/assets/banner.png'
import FooterImage from '../src/assets/footer.jpg'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Tabs />
      <img src={BannerImage} alt="Banner" />
      <h2>热门</h2>
      <Cateogry />
      <h2>直播</h2>
      <Cateogry />
      <h2>推荐</h2>
      <Cateogry />
      <img src={FooterImage} alt="footer" />
      <footer> <span>@kckc2022</span></footer>
    </div>
  )
}

export default App