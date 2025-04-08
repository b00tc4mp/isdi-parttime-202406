import MyProfileForm from '../../components/Forms/MyProfileForm'
import Header from '../../components/Others/Header'

function MyProfile({ onUserLoggedOut }) {

    return (
        <div className="h-screen overflow-hidden bg-blue-100">
            <Header onUserLoggedOut={onUserLoggedOut}/>
            <MyProfileForm onUserLoggedOut={onUserLoggedOut}/>
        </div>
    )
}

export default MyProfile