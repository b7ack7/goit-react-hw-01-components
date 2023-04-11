import styled from '@emotion/styled';

export const Table = styled.table`
width: 900px;
margin:  0 auto 20px;
border-collapse: collapse;
font-size: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
padding: 10px;
background-color: rgb(127, 204, 255);
color: #FFFFFF;
:not(:last-of-type) {
    border-right: 1px solid #fff;
  }
`;

export const Tbody = styled.tbody``;