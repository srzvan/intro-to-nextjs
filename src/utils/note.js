export function getNote(notes, id) {
  return notes.find(note => findNoteById(note, id));
}

export function findNoteIndex(notes, id) {
  return notes.findIndex(note => findNoteById(note, id));
}

function findNoteById(note, id) {
  return note.id === parseInt(id);
}
