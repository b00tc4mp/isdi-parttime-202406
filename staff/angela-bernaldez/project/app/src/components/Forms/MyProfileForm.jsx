import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logic from '../../logic'
import { Errors, Validator } from 'common'
import { useModal } from '../../context'
import modals from '../../modals/modals.json'

function MyProfile({ onUserLoggedOut }) {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [newUsername, setNewUsername] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [repeatedNewPassword, setRepeatedNewPassword] = useState("")
  const [editingUsername, setEditingUsername] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)
  const [deletingAccount, setDeletingAccount] = useState(false)
  const [deletePassword, setDeletePassword] = useState("")

  const { openModal, openModalError } = useModal()

  useEffect(() => {
    logic.getUser()
      .then((user) => {
        setUserData(user)
      })
  }, [])

  const handleUsernameChange = () => {
    Validator.username(newUsername)
    logic.updateUsername(newUsername)
      .then(() => {
        setUserData(prev => ({ ...prev, username: newUsername }))
        setEditingUsername(false);
      })
      .catch((error) => new Errors.UnexpectedError('Error changing username:', error))
  }

  const handlePasswordChange = () => {
    Validator.confirmationPassword(newPassword, repeatedNewPassword)
    logic.updatePassword(oldPassword, newPassword)
      .then(() => {
        setChangingPassword(false)
        setOldPassword("")
        setNewPassword("")
        setRepeatedNewPassword("")
      })
      .catch((error) => new Errors.UnexpectedError('Error changing password:', error))
  }

  const handleDeleteAccount = () => {
    openModal({
      ...modals.delete, 
      onConfirm: () => {
        logic.deleteUser(deletePassword)
          .then(() => {
            console.log('Account deleted successfully')
            onUserLoggedOut()
            sessionStorage.clear()
            navigate('/')
          })
          .catch((error) => {
            console.log("Error deleting account:", error)
            openModalError(new Errors.UnexpectedError("Error deleting account"))
          })
      }
    })
  }

    return (
        <div className="h-1/3 flex justify-center items-center">
            <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8">
                {/* Email Section */}
                <div className="mb-6 border-b pb-4">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Email</h2>
                    <div className="bg-gray-100 text-gray-600 p-3 rounded-md">
                        {userData?.email || "Loading..."}
                    </div>
                </div>

                {/* Username Section */}
                <div className="mb-6 border-b pb-4">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Username</h2>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                        {!editingUsername ? (
                            <>
                                <span className="text-gray-600">{userData?.username || "Loading..."}</span>
                                <button 
                                    className="text-blue-500 hover:text-blue-700 font-medium"
                                    onClick={() => setEditingUsername(true)}
                                >
                                    Edit
                                </button>
                            </>
                        ) : (
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="New username"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    className="w-full p-2 border rounded-md mb-2"
                                />
                                <div className="flex gap-2">
                                    <button 
                                        className="flex-1 bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-700"
                                        onClick={handleUsernameChange}
                                    >
                                        Save
                                    </button>
                                    <button 
                                        className="flex-1 bg-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-400"
                                        onClick={() => setEditingUsername(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Password Section */}
                <div className="mb-6 border-b pb-4">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Password</h2>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                        {!changingPassword ? (
                            <>
                                <span className="text-gray-600">***********</span>
                                <button 
                                    className="text-blue-500 hover:text-blue-700 font-medium"
                                    onClick={() => setChangingPassword(true)}
                                >
                                    Change
                                </button>
                            </>
                        ) : (
                            <form 
                                className="w-full"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handlePasswordChange()
                                }}
                            >
                                <input
                                    type="password"
                                    placeholder="Old password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className="w-full p-2 border rounded-md mb-2"
                                    autoComplete='current-password'
                                />
                                <input
                                    type="password"
                                    placeholder="New password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full p-2 border rounded-md mb-2"
                                    autoComplete='new-password'
                                />
                                <input 
                                    type="password"
                                    placeholder="Repeat new password"
                                    value={repeatedNewPassword}
                                    onChange={(e) => setRepeatedNewPassword(e.target.value)}
                                    className="w-full p-2 border rounded-md mb-2"
                                    autoComplete='repeat-new-password'
                                />
                                <div className="flex gap-2">
                                    <button 
                                        type="submit"
                                        className="flex-1 bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        className="flex-1 bg-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-400"
                                        onClick={() => setChangingPassword(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Delete Account */}
                <div className="mt-6">
                    {!deletingAccount ? (
                        <button 
                            className="w-full bg-red-500 text-white font-medium py-3 rounded-md hover:bg-red-700 transition duration-200"
                            onClick={() => setDeletingAccount(true)}
                        >
                            Delete Account
                        </button>
                    ) : (
                        <div className="bg-red-100 p-4 rounded-md shadow-md">
                            <p className="text-red-700 mb-2 text-sm font-semibold">
                                Enter your password to confirm deletion:
                            </p>
                            <input
                                type="password"
                                placeholder="Your password"
                                value={deletePassword}
                                onChange={(e) => setDeletePassword(e.target.value)}
                                className="w-full p-2 border rounded-md mb-2"
                                autoComplete="current-password"
                            />
                            <div className="flex gap-2">
                                <button 
                                    className={`flex-1 py-2 rounded-md text-white font-medium transition duration-200 ${
                                        deletePassword ? "bg-red-500 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                    onClick={handleDeleteAccount}
                                    disabled={!deletePassword}
                                >
                                    Confirm Delete
                                </button>
                                <button 
                                    className="flex-1 bg-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-400"
                                    onClick={() => {
                                        setDeletingAccount(false);
                                        setDeletePassword("");
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyProfile
