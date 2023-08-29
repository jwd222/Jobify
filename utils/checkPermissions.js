import { UnauthenticatedError } from '../errors/index.js'

const checkPermissions = (requestedUser, resourceUserId) => {
  //   if (requestedUser.role === 'admin') return
  if (requestedUser.userId === resourceUserId.toString()) return
  throw new UnauthenticatedError('Not authorized to access this route ')
}
export default checkPermissions
