import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
  }
`;
