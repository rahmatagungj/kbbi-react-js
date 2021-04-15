import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  const [toFind, setToFind] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({});
  const [failed, setFailed] = useState(false);

  const handleFetch = async () => {
    setShow(true);
    setLoading(true);
    await fetch(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${toFind}`)
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        setResults({ ...resJson });
        setLoading(false);
      })
      .catch(setFailed(true));
  };

  const handleFind = (e) => {
    setToFind(e.target.value.trim());
  };

  return (
    <div>
      <Header />
      <Container>
        <Form>
          <Input type="text" name="toFInd" id="toFInd" onChange={handleFind} />
          <ButtonFetch onClick={handleFetch}>CARI</ButtonFetch>
        </Form>
        <ContainerResult>
          {show ? (
            !loading ? (
              <div>
                <p>{results.lema}</p>
                <p>{results.arti}</p>
              </div>
            ) : !failed ? (
              <p>Data tidak ada</p>
            ) : (
              <p>LOADING ...</p>
            )
          ) : null}
        </ContainerResult>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ContainerResult = styled.div`
  padding: 5px;
  border-radius: 0.5em;
  background-color: white;
  color: black;
  max-width: 90%;
  margin-top: 5vh;
`;
const ButtonFetch = styled.button`
  border: 0px solid black;
  color: white;
  background-color: #ffa600;
  border-radius: 0.5em;
  padding: 8px;
  width: 100%;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

const Input = styled.input`
  border-radius: 0.5em;
  border: 0.5px solid black;
  height: 32px;
  width: 100%;
  padding: 2px;
  &:focus {
    outline: none;
  }
`;

const Form = styled.div`
  width: 40%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  max-width: 300px;
`;

export default App;
