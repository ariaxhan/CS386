let book = { title: "McBeth", author: "Shakespeare", edition: 6 };
for (item in book) {
    console.log(`Property: ${item} Value: ${book[item]}`);
}
