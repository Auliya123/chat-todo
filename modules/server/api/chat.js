import axios from "axios";

export async function chatList() {
  return await fetch(`http://localhost:3000/api/chats`).then((response) => {
    return response.json();
  });
}

export async function chatFeed(id) {
  return await fetch(`http://localhost:3000/api/chats/${id}`).then(
    (response) => {
      return response.json();
    }
  );
}

export async function sendChat(id, text) {
  console.log("id", id);
  console.log("text", text);
  return axios
    .post(
      `https://api.chatengine.io/chats/${id}/messages`,
      {
        text: "hallo",
      },
      {
        headers: {
          "Project-ID": "e6ec3c5e-784a-4e8e-a39c-3f544022765c",
          "User-Name": "Michelle",
          "User-Secret": "123",
        },
      }
    )
    .then((response) => {
      return response.json();
    });
}
