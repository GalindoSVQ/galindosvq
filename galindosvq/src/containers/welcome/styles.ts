import styled from 'styled-components';

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.spacing.s01};
  font-weight: ${({ theme }) => theme.weight.black};
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.s01};
`;
