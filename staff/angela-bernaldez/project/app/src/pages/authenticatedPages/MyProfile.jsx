import MyProfileForm from '../../components/Forms/MyProfileForm'
import Header from '../../components/Others/Header'

function MyProfile({ onUserLoggedOut }) {

    // TODO: arreglar el alto de la pagina para que no haga overflow
    return (
        <div className="h-screen">
            <Header onUserLoggedOut={onUserLoggedOut}/>
            <MyProfileForm onUserLoggedOut={onUserLoggedOut}/>
        </div>
    )
}

export default MyProfile