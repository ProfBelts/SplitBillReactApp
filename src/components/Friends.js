import { Button } from "./Button";

export function Friends({ friends, onSelect, selectedFriend, onClick }) {
  const isSelected = selectedFriend?.id === friends.id;

  return (
    <div>
      <li>
        <img src={friends.image} />
        <h3> {friends.name} </h3>

        {friends.balance < 0 && (
          <p className="red">
            {" "}
            You owe {friends.name} ${Math.abs(friends.balance)}{" "}
          </p>
        )}

        {friends.balance > 0 && (
          <p className="green">
            {" "}
            {friends.name} owes you ${friends.balance}{" "}
          </p>
        )}

        {friends.balance === 0 && (
          <p className=""> You and {friends.name} are even. </p>
        )}

        <Button onClick={() => onSelect(friends)}>
          {" "}
          {isSelected ? "Close" : "Select"}{" "}
        </Button>
      </li>
    </div>
  );
}
