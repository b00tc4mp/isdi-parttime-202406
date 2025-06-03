import MyProfileForm from '../../components/Forms/MyProfileForm'
import Header from '../../components/Others/Header'

function MyProfile({ onUserLoggedOut }) {
    return (
        <div className="h-screen shadow-box overflow-hidden bg-blue-100 flex flex-col">
            <Header onUserLoggedOut={onUserLoggedOut} />
            
            <div className="flex-1 flex justify-center items-center">
                <div className="w-full max-w-3xl px-8">
                    <MyProfileForm onUserLoggedOut={onUserLoggedOut} />
                </div>
            </div>
        </div>
    )
}

export default MyProfile