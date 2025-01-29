import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  overflow-y: hidden;
  transition: height 1s ease;
  height: ${props => {
    return props.height;
  }};
  
`;