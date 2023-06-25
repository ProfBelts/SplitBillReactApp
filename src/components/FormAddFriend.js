import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriend, onShow }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newFriends = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0
    };

    onAddFriend(newFriends);

    setName("");
    onShow(false);
    // onShow(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>
        <span> 👬</span> Friend Name:{" "}
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>
        <span> 🖼️</span> Image URL:{" "}
      </label>
      <input
        type="text"
        value={image}
        setImage={(e) => setImage(e.target.value)}
      />

      <Button> Add </Button>
    </form>
  );
}
