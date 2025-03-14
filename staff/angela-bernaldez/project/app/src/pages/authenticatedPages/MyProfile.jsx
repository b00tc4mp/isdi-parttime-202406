import MyProfileForm from '../../components/Forms/MyProfileForm'
import Header from '../../components/Others/Header'

function MyProfile() {

    return (
        <div className="h-screen">
            <Header />
            <MyProfileForm />
            {/* 

                things to add here: Hello, username

                edit your profile: 
                - change password
                - change username
                - delete account
            
            */}
        </div>
    )
}

export default MyProfile