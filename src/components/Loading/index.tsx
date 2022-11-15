import styled, { keyframes } from "styled-components";

const keyframes1 = keyframes`
0%   { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
const Loader = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid #00f97c;
  border-right-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: ${keyframes1} 1s linear infinite;
`;

export default function Loading() {
  return <Loader></Loader>;
}
