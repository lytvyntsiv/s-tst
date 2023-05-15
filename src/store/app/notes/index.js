import { createSlice } from "@reduxjs/toolkit";
import { NOTES_DATA } from "../../../mock-data/noteList";

export const notesSlice = createSlice({
  name: "appNotes",
  initialState: {
    notes: NOTES_DATA,
  },
  reducers: {
    handleDeleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    handleAddNote: (state, action) => {
      state.notes.push(action.payload);
    },
    handleEditNote: (state, action) => {
      const { id, title, description } = action.payload;

      state.notes = state.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title,
            description,
          };
        } else {
          return note;
        }
      });
    },
  },
});

export const { handleDeleteNote, handleAddNote, handleEditNote } =
  notesSlice.actions;

export default notesSlice.reducer;
