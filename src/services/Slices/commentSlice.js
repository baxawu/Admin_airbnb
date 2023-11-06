import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsAPI from "../commentAPI";

const initialState = {
    comments : [],
    loading: false,
    error: null,

    comment: null,
    loadingComment : false,
    errorComment : null
}

export const getComments = createAsyncThunk(
    "comments/getComments",
    async () => {
        try {
            const data = await commentsAPI.getComments();
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const deleteComment = createAsyncThunk(
    'comment/deleteComment', 
    async(id) => {
    try{
      
        const data = await commentsAPI.deleteComment(id)
        return data
    }catch(error){
        throw error;
    }
    })

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state,action) => {
            return {...state, loading: true};
        });
        builder.addCase(getComments.fulfilled, (state, action) => {
            return {...state, loading: false, comments: action.payload};
        });
        builder.addCase(getComments.rejected, (state,action) => {
            return {...state, loading: false, error: action.error.message};
        });

        builder.addCase(deleteComment.pending,(state,action)=> {
            return {...state, loadingComment: true};
        })
        builder.addCase(deleteComment.fulfilled,(state,action)=> {
            return {...state, loadingComment: false, comment: action.payload};
        })
        builder.addCase(deleteComment.rejected,(state,action)=> {
            return {...state, loadingComment: false, errorcomment: action.error.message};
        })
    }
})


export default commentsSlice.reducer;