import chatsJSON from "server/data/chats";

export default (req, res) => {
  const chatID = Number(req.query.id);
  const chatList = chatsJSON;

  const chatBasedOnID = chatList.filter((chat) => chat.id === chatID);

  res.statusCode = 200;
  res.json(chatBasedOnID.pop());
};
