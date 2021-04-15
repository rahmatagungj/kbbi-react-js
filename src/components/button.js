import React, { useState } from "react";
import styled from "styled-components";

const Buttons = ({ toFind }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({});

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
      .catch(setLoading(true));
  };

  return (
    <Div>
      <ButtonFetch onClick={handleFetch}>CARI</ButtonFetch>
      <Container>
        {show ? (
          !loading ? (
            <div>
              <p>{results.lema}</p>
              <p>{results.arti}</p>
            </div>
          ) : (
            <p>LOADING ...</p>
          )
        ) : null}
      </Container>
    </Div>
  );
};

const Container = styled.div`
  background-color: red;
`;

const Div = styled.div`
  margin-top: 10px;
`;

const ContainerResults = styled.div`
  background: orange;
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
export default Buttons;
