import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../apis/instance";
import { Review } from "../../types/types";

interface ReviewState {
  isLoading: boolean;
  reviews: Review[];
  review: Review | undefined;
  success: boolean;
  error: string | null;
}

const initialState: ReviewState = {
  isLoading: false,
  reviews: [],
  review: undefined,
  success: false,
  error: null,
};

export const getReviews = createAsyncThunk<Review[]>(
  "reviews/getReviews",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/reviews");
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getReviewDetail = createAsyncThunk<Review, number>(
  "reviews/getReviewDetail",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`/reviews/${id}`);
      console.log(data);
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addReview = createAsyncThunk<Review, any>(
  "reviews/addReview",
  async (args, thunkApi) => {
    try {
      const { data } = await instance.post("/reviews", args);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const editReview = createAsyncThunk<Review>(
  "reviews/editReview",
  async (payload, thunkApi) => {
    try {
      const { data } = await instance.put("/reviews", payload);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(getReviewDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviewDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
    });
    builder.addCase(getReviewDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(addReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(editReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editReview.fulfilled, (state, action) => {
      state.isLoading = false;
      const newState = state.reviews.map((review) => {
        if (review.id === action.payload.id) {
          return {
            ...review,
            title: action.payload.title,
            comment: action.payload.comment,
            readStart: action.payload.readStart,
            readEnd: action.payload.readEnd,
            star: action.payload.star,
            page: action.payload.page,
          };
        }
        return review;
      });
      state.reviews = newState;
      state.review = newState.find((review) => review.id === action.payload.id);
    });
    builder.addCase(editReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default reviewSlice.reducer;
