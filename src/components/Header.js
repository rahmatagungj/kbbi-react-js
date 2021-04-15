import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <h1>KBBI FINDER</h1>
      <p>By Rahmat Agung Julians</p>
    </Headers>
  );
};

const Headers = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #40afa6;
  padding: 10px;
  font-weight: 700;
  color: white;
`;

export default Header;
