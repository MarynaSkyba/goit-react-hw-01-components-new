import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  
  return (
    <ul className={s.friendlist}>
      {friends.map (({id, isOnline, avatar, name}) => (
        <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar = {avatar}
        name = {name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
