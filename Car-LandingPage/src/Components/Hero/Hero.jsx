import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_btn from '../../assets/play_icon.png'
import pause_btn from '../../assets/pause_icon.png'


const Hero = ({ setPlayStatus, HeroData, heroCount, setHeroCount, playStatus }) => {

  return (

    <div className="hero">

      <div className="hero-text">
        <p>{HeroData.Text1}</p>
        <p>{HeroData.Text2}</p>
      </div>

      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrow_btn} alt="" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => { setHeroCount(0) }} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => { setHeroCount(1) }} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => { setHeroCount(2) }} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause_btn : play_btn} alt="" />
          <p>See the Vedio</p>
        </div>
      </div>
    </div>

  )
}

export default Hero