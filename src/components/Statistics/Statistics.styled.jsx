import styled from '@emotion/styled';
import { getRandomHexColor, getFlexBasis } from 'utils';

export const StatisticsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  box-shadow: 0 0 10px #c6cccced;
  margin-top: 30px;
`;

export const Title = styled.h2`
  padding: 50px;
  margin: 0 auto;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.36;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  background-color: #ffffff;
`;

export const StatList = styled.ul`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: ${getFlexBasis};
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  gap: 10px;
  background-color: ${getRandomHexColor};
  color: #ffffff;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;
