import { INCREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES_AMOUNT, SET_ROLE } from "../types";

export const increaseTotalLikes = () => ({
  type: INCREASE_TOTAL_LIKES,
});

export const increaseTotalLikesByAmount = (payload : number) => ({
  type: INCREASE_TOTAL_LIKES_AMOUNT,
  payload: payload
});

export const setRole = (payload : string) => ({
  type: SET_ROLE,
  payload: payload
});
