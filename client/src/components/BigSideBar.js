import Logo from './Logo.js'
import NavLinks from './NavLinks.js'
import { useAppContext } from '../context/appContext.js'
import Wrapper from '../assets/wrappers/BigSidebar.js'

const BigSideBar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSideBar
