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
                    console.log(_userData)
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }


    }, [username])

    return <h1>Profile: {userData && userData.username}</h1>
}

export default Profile