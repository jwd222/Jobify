import Wrapper from '../assets/wrappers/SmallSidebar.js'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext.js'

import Logo from './Logo.js'
import NavLinks from './NavLinks.js'

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}
export default SmallSideBar
