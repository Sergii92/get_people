import { createSelector } from "reselect";

export const selectPeopleData = (state) => state.people.people.data;
export const selectFirstName = (state) => state.people.filters.firstName;
export const selectLastName = (state) => state.people.filters.lastName;
export const selectAge = (state) => state.people.filters.age;
export const selectSexMale = (state) => state.people.filters.sex.male;
export const selectSexFemale = (state) => state.people.filters.sex.female;

export const selectPeople = createSelector(
  selectPeopleData,
  selectFirstName,
  selectLastName,
  selectAge,
  selectSexMale,
  selectSexFemale,
  (
    peopleData,
    fistNameValue,
    lastNameValue,
    ageValue,
    maleValue,
    femaleValue
  ) =>
    peopleData.filter(
      (item) =>
        item.name.toLowerCase().includes(fistNameValue.toLowerCase()) &&
        item.lastname.toLowerCase().includes(lastNameValue.toLowerCase()) &&
        (ageValue > 0 ? item.age === +ageValue : item.age) &&
        (!maleValue ? item.sex === "f" : "m") &&
        (!femaleValue ? item.sex === "m" : "f")
    )
);
