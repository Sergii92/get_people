import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../Input/Input";
import Checkbox from "../CheckBox/Checkbox";
import {
  selectFirstName,
  selectLastName,
  selectAge,
  selectSexMale,
  selectSexFemale,
} from "../../bus/people/selectors";
import { peopleActions } from "../../bus/people/action";
import "./style.css";

const Filter = () => {
  const dispatch = useDispatch();

  const firstNameValue = useSelector(selectFirstName);
  const lastNameValue = useSelector(selectLastName);
  const ageValue = useSelector(selectAge);
  const sexMaleValue = useSelector(selectSexMale);
  const sexFemaleValue = useSelector(selectSexFemale);

  const onChangeFirstName = (e) => {
    dispatch(peopleActions.filterFirstName(e.target.value));
  };
  const onChangeLastName = (e) => {
    dispatch(peopleActions.filterLastName(e.target.value));
  };
  const onChangeAge = (e) => {
    dispatch(peopleActions.filterAge(e.target.value));
  };
  const onChangeMale = ({ target: { checked } }) => {
    dispatch(peopleActions.filterSexMale(checked));
  };
  const onChangeFemale = ({ target: { checked } }) => {
    dispatch(peopleActions.filterSexFemale(checked));
  };

  return (
    <div className="filter-block">
      <h1>ФИЛЬТРЫ</h1>
      <Input onChange={onChangeFirstName} value={firstNameValue} label="ИМЯ" />
      <Input
        onChange={onChangeLastName}
        value={lastNameValue}
        label="Фамилия"
      />
      <Input onChange={onChangeAge} value={ageValue} label="Возрвст" />
      <div className="checkbox">
        <h5>ПОЛ:</h5>
        <Checkbox label="М" checked={sexMaleValue} onChange={onChangeMale} />
        <Checkbox
          label="Ж"
          checked={sexFemaleValue}
          onChange={onChangeFemale}
        />
      </div>
    </div>
  );
};

export default Filter;
