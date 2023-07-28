import { Link, Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout.js'

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-jobs">all jobs</Link>
        <Link to="add-job">add job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  )
}
export default SharedLayout
