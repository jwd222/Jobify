import { Outlet } from 'react-router-dom'
import { NavBar, SmallSideBar, BigSideBar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout.js'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
export default SharedLayout
