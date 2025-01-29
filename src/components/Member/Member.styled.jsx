import styled from '@emotion/styled';

export const Img = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;

  background-image: url({${props => props.photo}});
  background-position: center center;
  background-repeat: no-repeat; 
  background-size: cover;
  background-color: rgb(206, 207, 209);
`;