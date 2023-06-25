import { Friends } from "./Friends";

export function FriendList({ friends, onSelect, selectedFriend, onClick }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friends={friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
