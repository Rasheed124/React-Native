import { INCREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES_AMOUNT } from "../types";

export const increaseTotalLikes = () => ({
  type: INCREASE_TOTAL_LIKES,
});

export const increaseTotalLikesByAmount = (payload) => ({
  type: INCREASE_TOTAL_LIKES_AMOUNT,
  payload: payload
});
