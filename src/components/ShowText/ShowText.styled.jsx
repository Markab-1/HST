import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  overflow-y: hidden;
  height: 210px;
  transition: height 1s cubic-bezier(.525,.66,.495,1.0);
  &.active {
  height: ${props => props.height}px;
  } 
`;
