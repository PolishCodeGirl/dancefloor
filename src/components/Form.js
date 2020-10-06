import React, { useState } from "react";
import styled from "styled-components";

import { getCanvasDimension, loadingDimensions } from "../canvasReducer";
import { dispatch } from "../store";

const Form = ({ ...props }) => {
  const [numberOfColumns, setNumberOfColumns] = useState("");
  const [numberOfRows, setNumberOfRows] = useState("");

  const handleOnColumnChange = (event) => {
    setNumberOfColumns(event.target.value);
  };

  const handleOnRowChange = (event) => {
    setNumberOfRows(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    dispatch(loadingDimensions());
    setNumberOfColumns("");
    setNumberOfRows("");

    setTimeout(() => {
      dispatch(
        getCanvasDimension(
          parseInt(numberOfRows, 10),
          parseInt(numberOfColumns, 10)
        )
      );
    }, 1000);
  };

  return (
    <FormStyled onSubmit={handleSearch} {...props}>
      <Input
        type="text"
        value={numberOfColumns}
        placeholder="Set column quantity"
        required
        onChange={handleOnColumnChange}
      />
      <Input
        type="text"
        value={numberOfRows}
        placeholder="Set row quantity"
        required
        onChange={handleOnRowChange}
      />

      <Button type="submit">Generate</Button>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  outline: none;
  background-color: #f2f2f2;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  background-color: #009de0;
  border: 1px solid #009de0;
  border-radius: 2px;
  color: white;
  outline: none;
`;
