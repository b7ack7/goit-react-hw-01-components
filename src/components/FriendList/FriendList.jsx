import PropTypes from "prop-types";
import { FrendListWrapper} from "./FriendList.styled";
import { FriendListItem } from "components/FriendListItem";


export const FriendList = ({friends}) => {
    return (
        <FrendListWrapper>{
            friends.map(friend => (
                <FriendListItem 
                key={friend.id}
                avatar = {friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                 />

            ))
        }

        </FrendListWrapper>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
            })
    )      
}