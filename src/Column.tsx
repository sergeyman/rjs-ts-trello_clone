import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface IColumnProps {
  text: string;
}

export const Column = ({
  text,
  children //to render * at once
}: React.PropsWithChildren<IColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
