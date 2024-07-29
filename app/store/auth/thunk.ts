import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { isSignOut, setUser } from './index';
import { RootState } from '../store'; // Importa el tipo de estado raíz de tu store
// Define el tipo de las funciones Thunk
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const signInThunk =
  (data: object): AppThunk =>
  async dispatch => {
    dispatch(setUser(data));
  };

export const signOutThunk = (): AppThunk => async dispatch => {
  dispatch(isSignOut());
};
