import styled from '@emotion/styled';
import { getBgColorIsOnline } from 'utils';

export const Item = styled.li`
width: 500px;
margin-bottom: 20px;
padding: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
background-color: #FFFFFF;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
`;

export const Status = styled.span`
width: 20px;
height: 20px;
background-color: ${getBgColorIsOnline};
border-radius: 50%;
`;

export const Avatar = styled.img`
width: 100px;
border-radius: 8px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
font-size: 30px;
font-weight: 700;
`;