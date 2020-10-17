import * as React from "react";
import "./styles.css";

import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";

import { AppReducerEx } from "./AppReducerEx";
import { StateCounter } from "./AppReducerEx";

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>

      <Column text="Counter useReducer()">
        <AppReducerEx />
      </Column>
      <Column text="Counter useState()">
        <StateCounter init={2} />
      </Column>
    </AppContainer>
  );
};

export default App;
