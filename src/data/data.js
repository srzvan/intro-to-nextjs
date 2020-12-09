var notes = new Array(15).fill(1).map((_, index) => ({
  id: Date.now() + index,
  title: `Note ${index}`,
}));

notes.unshift({
  id: 1,
  title: "Welcome to the Dope Notes app",
  content:
    "This app lets you do CRUD operations (Create Read Update Delete) on notes resources. Have fun playing around with it.",
});

module.exports = notes;
