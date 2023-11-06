import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomAPI from "../roomAPI";

const initialState = {
    rooms : [],
    loading: false,
    error: null,


    room: null,
    loadingRoom : false,
    errorRoom : null
}

export const getRooms = createAsyncThunk(
    "rooms/getRoom",
    async () => {
        try {
            const data = await roomAPI.getRoom();
            return data;
        } catch (error) {
            throw error
        }
    }
);

export const getRoomById = createAsyncThunk(
    "room/getRoomById",
    async (id) => {
        try {
            const data = await roomAPI.getRoomById(id);
            return data
        } catch (error) {
            throw error;
        }
    }
)

export const deleteRoom = createAsyncThunk(
    'room/deleteRoom', 
    async(id) => {
    try{
      
        const data = await roomAPI.deleteRoom(id)
        return data
    }catch(error){
        throw error;
    }
    })

export const updateRoom = createAsyncThunk(
    'room/updateRoom',
    async(id,{dispatch,rejectWithValue})=> {
        try{
            const data = await roomAPI.updateRoom(id)
            dispatch(getRooms())
            return data
        }catch(error){
            throw error;
        }
    }) 

const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        setRoomNull : (state,action) => {
            return {...state, room: null};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRooms.pending, (state,action) => {
            return {...state, loading: true};
        });
        builder.addCase(getRooms.fulfilled, (state, action) => {
            return {...state, loading: false, rooms: action.payload};
        });
        builder.addCase(getRooms.rejected, (state, action) => {
            return {...state, loading: false, error: action.error.message};
        });

        // Get room by id
        builder.addCase(getRoomById.pending, (state,action) => {
            return {...state, loadingRoom: true};
        });
        builder.addCase(getRoomById.fulfilled, (state,action) => {
            return {...state, loadingRoom: false, room: action.payload};
        });
        builder.addCase(getRoomById.rejected, (state,action) => {
            return {...state, loadingRoom: false, errorRoom: action.error.message};
        });

        //deleteRoom
        builder.addCase(deleteRoom.pending,(state,action)=> {
            return {...state, loadingRoom: true};
        })
        builder.addCase(deleteRoom.fulfilled,(state,action)=> {
            return {...state, loadingRoom: false, room: action.payload};
        })
        builder.addCase(deleteRoom.rejected,(state,action)=> {
            return {...state, loadingRoom: false, errorRoom: action.error.message};
        })

        //updateRoom
        builder.addCase(updateRoom.pending,(state,action)=> {
            return {...state, loadingRoom: true};
        })
        builder.addCase(updateRoom.fulfilled,(state,action)=> {
            return {...state, loadingRoom: false, room: action.payload};
        })
        builder.addCase(updateRoom.rejected,(state,action)=> {
            return {...state, loadingRoom: false, errorRoom: action.error.message};
        })
    },
})



export const { setRoomNull } = roomSlice.actions;

export default roomSlice.reducer;