import chatsJSON from "server/data/chats";

export default (req, res) => {
  res.statusCode = 200;
  res.json(chatsJSON);
};
