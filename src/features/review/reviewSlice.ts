import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../apis/instatnce";


//Actions
export const getReviews = createAsyncThunk("reviews/getReviews", async (data, thunkApi) => {
    try {
        const response = await instance.get('/reviews');
        console.log(response.data);
        return thunkApi.fulfillWithValue(response.data);
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const getReviewDetail = createAsyncThunk("reviews/getReviewDetail", async (id: number, thunkApi) => {
    try {
        const response = await instance.post(`/reviews/${id}`);
        console.log(response.data);
        return thunkApi.fulfillWithValue(response.data);
    } catch (error: any) {
        return thunkApi.rejectWithValue(error.message);
    }
});

interface ReviewState {
    loading: boolean
    error: null | string
    data: null | any[]
    reviewDetail: null | any
}

const initialState: ReviewState = {
    loading: false,
    error: null,
    data: null,
    reviewDetail: null
}

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getReviews.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getReviews.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(getReviews.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        });
        builder.addCase(getReviewDetail.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getReviewDetail.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(getReviewDetail.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        });
    }
})

export default reviewSlice.reducer;