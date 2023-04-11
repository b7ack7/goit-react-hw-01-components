import styled from '@emotion/styled';

export const TableTr = styled.tr`
 :nth-of-type(odd){
	background: #fff;
}
 :nth-of-type(even){
	background: #F7F7F7;
}
`;

export const TableTd = styled.td`
padding: 10px;
text-align: center;
color: grey;
 :first-of-type {
    text-transform: capitalize;
    text-align: start;
    padding-left: calc(100%/8);
}
 :not(:last-of-type) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
}
`;