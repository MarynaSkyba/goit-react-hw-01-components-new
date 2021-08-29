import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.statusOn : s.statusOff}></span>
          <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
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
