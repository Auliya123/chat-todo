export async function getList(dataFetch) {
  return fetch(`https://api.chatengine.io/${dataFetch}`, {
    headers: {
      "Project-ID": "e6ec3c5e-784a-4e8e-a39c-3f544022765c",
      "User-Name": "Michelle",
      "User-Secret": "123",
    },
  }).then((response) => {
    return response.json();
  });
}
