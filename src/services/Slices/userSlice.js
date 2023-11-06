import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../userAPI";

const initialState = {
  users: [],
  loading: false,
  error: null,

  user: null,
  loadingUser: false,
    errorUser: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const data = await userAPI.getUsers();
    return data;
  } catch (error) {
    throw error;
  }
});

export const getUserById = createAsyncThunk(
    "users/getUserById",
    async (id) => {
        try {
            const data = await userAPI.getUserById(id);
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const deleteUser = createAsyncThunk(
  'user/deleteUser', 
  async(id) => {
  try{
    
      const data = await userAPI.deleteUser(id)
      return data
  }catch(error){
      throw error;
  }
  })

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserAction: (state,action) => {
      return {...state, user: null};
    }
  },
  extraReducers: (builder) => {
    // Users
    builder.addCase(getUsers.pending, (state, action) => {
      return { ...state, loading: true };
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return { ...state, loading: false, users: action.payload };
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    });

    // Get user by id
    builder.addCase(getUserById.pending, (state,action) => {
        return {...state, loadingUser: true};
    });
    builder.addCase(getUserById.fulfilled, (state,action) => {
        return {...state, loadingUser: false, user: action.payload};
    });
    builder.addCase(getUserById.rejected, (state,action) => {
        return {...state, loadingUser: false, errorUser: action.error.message};
    });
  },
});


export default userSlice.reducer;
