import { TYPES } from "./types";

const initialState = {
  people: { data: [], loading: false, error: false },
  filters: {
    firstName: "",
    lastName: "",
    age: "",
    sex: {
      male: true,
      female: true,
    },
  },
};

export const peopleReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case TYPES.FETCH_PEOPLE.SUCCESS:
      return {
        ...state,
        people: {
          ...state.people,
          data: payload,
          loading: false,
        },
      };
    case TYPES.FETCH_PEOPLE.START:
      return {
        ...state,
        people: {
          ...state.people,
          loading: true,
        },
      };
    case TYPES.FETCH_PEOPLE.EROR:
      return {
        ...state,
        people: {
          ...state.people,
          loading: false,
          error: true,
        },
      };
    case TYPES.FILTERS.FIRST_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          firstName: payload,
        },
      };
    case TYPES.FILTERS.LAST_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          lastName: payload,
        },
      };
    case TYPES.FILTERS.AGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          age: payload,
        },
      };

    case TYPES.FILTERS.SEX.MALE:
      return {
        ...state,
        filters: {
          ...state.filters,
          sex: {
            ...state.filters.sex,
            male: payload,
          },
        },
      };
    case TYPES.FILTERS.SEX.FEMALE:
      return {
        ...state,
        filters: {
          ...state.filters,
          sex: {
            ...state.filters.sex,
            female: payload,
          },
        },
      };

    default:
      return state;
  }
};
