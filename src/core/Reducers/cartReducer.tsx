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
  CHANGE_INITIAL_VALUES: "CHANGE_INITIAL_VALUES",
};

const changeSelected = (
  state: PetsState,
  field: string,
  id: string
): PetsState => {
  return state[field].map((p) => {
   return (p.id === id) ? { ...p, selected: !p.selected }: p;
    }
  );
};

const setInitialState = (state: PetsState, field: string): PetsState => {
  return state[field].map((p) => {
    return { ...p, selected: false };
  });
};

export const CartReducer = (state: PetsState, action: Action) => {
  switch (action.type) {
    case actionsIds.SET_CATS:
      return { ...state, cats: action.payload };
    case actionsIds.SET_DOGS:
      return { ...state, dogs: action.payload };
    case actionsIds.CHANGE_SELECTED:
      return {
        cats: changeSelected(state, "cats", action.payload),
        dogs: changeSelected(state, "dogs", action.payload),
      };
    case actionsIds.CHANGE_INITIAL_VALUES:
      return {
        cats: setInitialState(state, "cats"),
        dogs: setInitialState(state, "dogs"),
      };

    default:
      return state;
  }
};
