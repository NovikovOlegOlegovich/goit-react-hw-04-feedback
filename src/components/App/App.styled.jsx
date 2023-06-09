import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: ${props => props.theme.colors.textColor};
`;
