import PropTypes from "prop-types";
import { TableTr, TableTd } from "./Transactions.styled";

export const Transaction = ({ type, amount, currency }) => {
    return (
    <TableTr>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}