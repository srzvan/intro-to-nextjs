import nc from "next-connect";

import notes from "../../../src/data/data";

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })
  .post((req, res) => {
    let newNote = { ...req.body, id: Date.now() };

    notes.push(newNote);
    res.json({ data: newNote });
  });

export default handler;
