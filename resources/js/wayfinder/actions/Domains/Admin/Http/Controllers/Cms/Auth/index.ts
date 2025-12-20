import LoginController from './LoginController'
import ProfileController from './ProfileController'
import ChangePasswordController from './ChangePasswordController'
import LogoutController from './LogoutController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    ChangePasswordController: Object.assign(ChangePasswordController, ChangePasswordController),
    LogoutController: Object.assign(LogoutController, LogoutController),
}

export default Auth