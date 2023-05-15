import React from "react";
import NotesItem from "../NotesItem";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteNote } from "../../store/app/notes";

const NotesList = () => {
  const notesList = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  console.log("notesList", notesList);

  return (
    <>
      <h2>My Notes</h2>
      <ul className="notes-list">
        {notesList &&
          notesList.map((note) => {
            return (
              <NotesItem
                key={note.id}
                {...note}
                deleteNote={(id) => {
                  dispatch(handleDeleteNote(id));
                }}
                // changeNoteData={onChangeNotData}
              />
            );
          })}
      </ul>
    </>
  );
};

export default NotesList;
