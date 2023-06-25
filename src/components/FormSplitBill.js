import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2> Split a bill with {friend.name} </h2>

      <label>
        <span>💸</span> Bill Value
      </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>
        <span>💲</span> Your Expense
      </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value))}
      />

      <label>
        <span>💲</span> {friend.name}'s Expense
      </label>
      <input type="text" disabled value={paidByFriend} />

      <label>
        <span>❓</span> Who's paying the bill?
      </label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user"> You </option>
        <option value="friend"> {friend.name} </option>
      </select>

      <Button> Split Bill </Button>
    </form>
  );
}
