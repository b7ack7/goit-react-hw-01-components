import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 1000px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 370px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: #7e6f7498 solid 2px;
`;

export const Avatar = styled.img`
  width: 300px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  flex-basis: calc(100% / 3);
  padding: 20px;
  background-color: #f5f4fa;
  :first-of-type {
    border-radius: 0px 0px 0px 8px;
  }
  :last-of-type {
    border-radius: 0px 0px 8px 0px;
  }
`;

export const Label = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;
