import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filter from "../components/Filter/Filter";
import Main from "../components/Main/Main";

import { selectPeople } from "../bus/people/selectors";
import { peopleActions } from "../bus/people/action";
import "../asets/style.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleActions.fetchPeopleRequest());
  }, []);

  const people = useSelector(selectPeople);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Filter />
        </div>
        <div className="col-md-9">
          <Main people={people} />
        </div>
      </div>
    </div>
  );
}

export default App;
