import { Container } from "./App.styled";
import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics";
import { FriendList } from "components/FriendList"; 
import { TransactionHistory } from "components/TransactionsHistory"; 
import user from "Data/user.json";
import data from "Data/data.json";
import friends from "Data/friends.json";
import transactions from "Data/transactions.json";

export const App = () => {
  return (
 <Container> 
    React homework template
   <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data}/>
  <Statistics stats={data}/>
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
</Container>

  );
};
