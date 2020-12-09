import nc from "next-connect";

import notes from "../../../src/data/data";
import { getNote, findNoteIndex } from "../../../src/utils/note";

const handler = nc()
  .get((req, res) => {
    var note = getNote(notes, req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: note });
  })
  .patch((req, res) => {
    var note = getNote(notes, req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const updateIndex = findNoteIndex(notes, req.query.id);
    var updatedNote = { ...note, ...req.body };

    notes[updateIndex] = updatedNote;

    res.json({ data: updatedNote });
  })
  .delete((req, res) => {
    var note = getNote(notes, req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const deleteIndex = findNoteIndex(notes, req.query.id);
    notes.splice(deleteIndex, 1);

    res.json({ data: req.query.id });
  });

export default handler;
