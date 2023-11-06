import {configureStore} from '@reduxjs/toolkit'
import authSlice from './services/Slices/authSlice';
import userSlice from './services/Slices/userSlice'
import roomSlice  from './services/Slices/roomSlice';
import locationSlice  from './services/Slices/locationSlice';
import modalSlice  from './services/Slices/modalSlice';
import commentSlice from './services/Slices/commentSlice';
import bookingSlice from './services/Slices/bookingSlice';

const store = configureStore({
    reducer: {
        authSlice,
        userSlice,
        roomSlice,
        bookingSlice,
        commentSlice,
        locationSlice,
        modalSlice,
        
    },
    devTools: true
})

export default store;