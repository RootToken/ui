import styled, { keyframes } from "styled-components";

const keyframes1 = keyframes`
0%   { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
const Loader = styled.div<{ $size?: number }>`
  width: ${props => props.$size || 22}px;
  height: ${props => props.$size || 22}px;
  border: 2px solid #00f97c;
  border-right-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: ${keyframes1} 1s linear infinite;
`;

export default function Loading({ size }: { size?: number }) {
  return <Loader $size={size}></Loader>;
}
