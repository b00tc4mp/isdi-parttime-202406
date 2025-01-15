import { useEffect, useState } from "react";
import { useParams } from "react-router"
import logic from "../../logic";

function Profile() {
    const [userData, setUserData] = useState(null);

    const params = useParams();
    const { username } = params;

    useEffect(() => {
        try {
            logic.getOneUser(username)
                .then((_userData) => {
                    setUserData(_userData)
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }


    }, [username])

    return <div className="w-full flex-col px-10 pt-5">
        <h1>Profile: {userData && userData.username}</h1>
        <h3>Bio: {userData && userData.bio}</h3>
    </div>
}

export default Profile