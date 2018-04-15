import { NoteAction, NoteEntity } from '../queries/NoteModel';

const initialState = {
  ids: [],
  byId: {}
};

export function noteEntityReducer(
  state: NoteEntity = initialState,
  action: NoteAction
): NoteEntity {
  switch (action.type) {
    // TODO: case ActionType.EDIT:
    //   return { ...state, text: action.payload.text };
    default:
      return state;
  }
}
