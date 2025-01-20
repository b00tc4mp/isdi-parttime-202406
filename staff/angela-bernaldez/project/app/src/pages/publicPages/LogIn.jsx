import LogInForm from '../../components/Forms/LogInForm'

function LogIn({ onUserLoggedIn }) {
    return <div className="flex flex-col gap-3 items-center">
        <LogInForm onUserLoggedIn={onUserLoggedIn} />
    </div>
}

export default LogIn