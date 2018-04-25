import { Entity, UUID } from '../../types/CommonType';

// State

export interface NoteState {
  noteId: UUID;
  text: string;
}

export type NoteEntity = Entity<UUID, NoteState>;

// Action

export enum NoteActionType {
  EDIT = 'note/EDIT'
}

interface EditAction {
  type: NoteActionType.EDIT;
  payload: { noteId: UUID; text: string };
}

export type NoteAction = EditAction;

export const edit = (noteId: UUID, text: string): EditAction => ({
  type: NoteActionType.EDIT,
  payload: { noteId, text }
});
