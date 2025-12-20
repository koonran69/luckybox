import Admin from './Admin'
import Auth from './Auth'
import Role from './Role'
import Permission from './Permission'

const Cms = {
    Admin: Object.assign(Admin, Admin),
    Auth: Object.assign(Auth, Auth),
    Role: Object.assign(Role, Role),
    Permission: Object.assign(Permission, Permission),
}

export default Cms