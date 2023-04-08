import React from "react";
import { PictureInfo } from "../../pods/list/list.vm";

export interface PetsState {
  cats: PictureInfo[];
  dogs: PictureInfo[];
}

export interface Action {
  type: string;
  payload: any;
}

export const actionsIds = {
  SET_CATS: "SET_CATS",
  SET_DOGS: "SET_DOGS",
  CHANGE_SELECTED: "CHANGE_SELECTED",
};

export const CartReducer = (state: PetsState, action: Action) => {
  switch (action.type) {
    case actionsIds.SET_CATS:
      return { ...state, cats: action.payload };
    case actionsIds.SET_DOGS:
      return { ...state, dogs: action.payload };
    case actionsIds.CHANGE_SELECTED:
      return {
        cats: state.cats.map((p) => {
          if (p.id === action.payload) {
            return { ...p, selected: !p.selected };
          } else {
            return p;
          }
        }),
        dogs: state.dogs.map((p) => {
          if (p.id === action.payload) {
            return { ...p, selected: !p.selected };
          } else {
            return p;
          }
        }),
      };
    default:
      return state;
  }
};
