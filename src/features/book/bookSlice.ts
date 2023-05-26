import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookAPI from "../../apis/bookApi";


//Actions
export const getBooks = createAsyncThunk("books/getBooks", async (title: string, thunkApi) => {
    try {
        const response = await bookAPI.get('/v3/search/book?target=title', { params: { query: `${title}` } });
        console.log(response.data);
        return thunkApi.fulfillWithValue(response.data);
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message);
    }
});

interface BookState {
    loading: boolean
    error: null | string
    data: null | { documents: any[] }
    bookDetail: null | any
}

const initialState: BookState = {
    loading: false,
    error: null,
    data: null,
    bookDetail: null
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getBooks.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getBooks.fulfilled, (state, action: PayloadAction<{ documents: any[] }>) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getBooks.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default bookSlice.reducer;