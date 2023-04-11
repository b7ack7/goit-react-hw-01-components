import PropTypes from "prop-types";
import { Transaction } from "components/Transactions";
import { Table, Thead, Tr, Th, Tbody } from "./TransactionsHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
 <Table>
  <Thead>
    <Tr>
     <Th>Type</Th>
     <Th>Amount</Th>
     <Th>Currency</Th>
    </Tr>
  </Thead>

  <Tbody>{
    items.map(item => {
     return  <Transaction 
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency} 
        />
    })
    }

  </Tbody>
 </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )
}