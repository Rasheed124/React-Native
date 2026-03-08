import React from "react";
import { INCREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES_AMOUNT } from "../types";

const initialState = {
  totalLikes: 30,
  name: "Rasheed",
};

export const datareducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INCREASE_TOTAL_LIKES:
      return { ...state, totalLikes: state.totalLikes + 1 };
    case INCREASE_TOTAL_LIKES_AMOUNT:
      return { ...state, totalLikes: state.totalLikes + actions.payload };

    default:
      return state;
  }
};
