// import React from "react";
// import { INCREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES_AMOUNT } from "../types";

import { createSlice } from "@reduxjs/toolkit";
// import { increaseTotalLikes } from "../actions/actions";

const initialState = {
  totalLikes: 30,
  name: "Rasheed",
};

// export const datareducer = (state = initialState, actions) => {
//   switch (actions.type) {
//     case INCREASE_TOTAL_LIKES:
//       return { ...state, totalLikes: state.totalLikes + 1 };
//     case INCREASE_TOTAL_LIKES_AMOUNT:
//       return { ...state, totalLikes: state.totalLikes + actions.payload };

//     default:
//       return state;
//   }
// };

export const dataReducer = createSlice({
  name: "dataSlice",
  initialState: initialState,
  reducers: {
    increaseTotalLikesByOne: (state) => {
      state.totalLikes += 1;
    },
    increaseTotalLikesByAmount: (state) => {
      state.totalLikes += 20;
    },
  },
});

export const { increaseTotalLikesByOne, increaseTotalLikesByAmount } =
  dataReducer.actions;
