/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router';
import Calendar from './privatePages/CalendarPage';
import EmergencyContact from './privatePages/ContactPage';
import NotFound from './NotFound';
import PrivateLayout from '../components/PrivateLayout';
const Private = ({ logout }) => {
    return (
        <Routes>
            <Route path="/" element={<PrivateLayout logout={logout} />}>
            <Route index element={<Calendar />} />
            <Route path="/home" element={<Calendar/>}/>
            <Route path="/emergency-contacts" element={<EmergencyContact/>}/>
            <Route path="/*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default Private;