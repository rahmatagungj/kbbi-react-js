import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./components/button";

function App() {
  const [toFind, setToFind] = useState("");

  const handleFind = (e) => {
    setToFind(e.target.value.trim());
  };

  return (
    <Container>
      <h1>KBBI FINDER</h1>
      <Form>
        <Input type="text" name="toFInd" id="toFInd" onChange={handleFind} />
        <Buttons toFind={toFind} />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const Input = styled.input`
  border-radius: 0.5em;
  border: 0.5px solid black;
  height: 32px;
  &:focus {
    outline: none;
  }
`;

const Form = styled.div`
  display: inline;
  max-width: 200px;
`;

export default App;
