import { TYPES } from "./types";
import { API } from "../../constants/api";

export const peopleActions = {
  fetchPeopleRequest: () => ({
    type: TYPES.FETCH_PEOPLE.REQUEST,
    payload: {
      method: "get",
      url: API.PEOPLES,
    },
  }),
  fetchPeopleSuccess: (data) => ({
    type: TYPES.FETCH_PEOPLE.SUCCESS,
    payload: data,
  }),
  fetchPeopleError: (error) => ({
    type: TYPES.FETCH_PEOPLE.EROR,
    payload: error,
  }),
  fetchPeopleStart: () => ({
    type: TYPES.FETCH_PEOPLE.START,
    payload: null,
  }),
  filterFirstName: (value) => ({
    type: TYPES.FILTERS.FIRST_NAME,
    payload: value,
  }),
  filterLastName: (value) => ({
    type: TYPES.FILTERS.LAST_NAME,
    payload: value,
  }),
  filterAge: (value) => ({
    type: TYPES.FILTERS.AGE,
    payload: value,
  }),
  filterSexMale: (value) => ({
    type: TYPES.FILTERS.SEX.MALE,
    payload: value,
  }),
  filterSexFemale: (value) => ({
    type: TYPES.FILTERS.SEX.FEMALE,
    payload: value,
  }),
};
