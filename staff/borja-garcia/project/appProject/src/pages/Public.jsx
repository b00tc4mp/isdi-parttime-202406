/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router';
import RegisterUser from '../components/Forms/RegisterForm';
import NotFound from './NotFound';
import Login from '../components/Forms/LoginForm';
const Public = ({setStamp}) => {
    return <div>
        <Routes>
            <Route path="/" element={<Login setStamp={setStamp}/>}/>
            <Route path="/login" element={<Login setStamp={setStamp}/>}/>
            <Route path="/register" element={<RegisterUser/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </div>
}

export default Public;
