import MyProfileForm from '../../components/Forms/MyProfileForm'
import Header from '../../components/Others/Header'

function MyProfile({ onUserLoggedOut }) {

    return (
        <div className="h-screen">
            <Header />
            <MyProfileForm onUserLoggedOut={onUserLoggedOut}/>
        </div>
    )
}

export default MyProfile