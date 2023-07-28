import main from '../assets/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby williamsburg hoodie jianbing tilde big mood roof party
            vibecession occupy. Ascot bodega boys keffiyeh tote bag williamsburg
            tumeric humblebrag literally small batch pitchfork jean shorts.
            Taxidermy retro wayfarers, cornhole health goth deep v vaporware
            tonx scenester meh.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
