import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingAPI from "../bookingAPI";

const initialState = {
    bookings : [],
    loading: false,
    error: null,

    booking :null,
    loadingBooking: false,
    errorBooking: null,


}

export const getBookings = createAsyncThunk(
    "bookings/getBookings",
    async () => {
        try {
            const data = await bookingAPI.getBooking();
            console.log(data);
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const getBookingById = createAsyncThunk(
    "booking/getBookingById",
    async (id) => {
        try {
            const data = await bookingAPI.getBookingById(id);
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const getBookingByUser = createAsyncThunk(
    "booking/getBookingByUser",
    async (idUser) => {
        try {
            const data = await bookingAPI.getBookingByUser(idUser);
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const deleteBooking = createAsyncThunk(
    'booking/deleteBooking', 
    async(id) => {
    try{
      
        const data = await bookingAPI.deleteBooking(id)
        return data
    }catch(error){
        throw error;
    }
    })

const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBookings.pending, (state,action) => {
            return {...state, loading: true};
        });
        builder.addCase(getBookings.fulfilled, (state, action) => {
            return {...state, loading: false, bookings: action.payload};
        });
        builder.addCase(getBookings.rejected, (state,action) => {
            return {...state, loading: false, error: action.error.message};
        });

        // Get booking by id
        builder.addCase(getBookingById.pending, (state,action) => {
            return {...state, loadingBooking: true};
        });
        builder.addCase(getBookingById.fulfilled, (state,action) => {
            return {...state, loadingBooking: false, booking: action.payload};
        });
        builder.addCase(getBookingById.rejected, (state,action) => {
            return {...state, loadingBooking: false, error: action.error.message};
        });

        //Get booking by user
        builder.addCase(getBookingByUser.pending, (state,action) => {
            return {...state, loading: true};
        });
        builder.addCase(getBookingByUser.fulfilled, (state,action) => {
            return {...state, loading: false, bookings: action.payload};
        });
        builder.addCase(getBookingByUser.rejected, (state,action) => {
            return {...state, loading: false, error: action.error.message};
        });
    }
})

export default bookingSlice.reducer;