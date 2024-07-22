import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { restoreToken, signIn, signOut } from './authSlice'; 
import { RootState } from '../store'; // Importa el tipo de estado raíz de tu store
// Define el tipo de las funciones Thunk
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const restoreTokenThunk = (data: string | null): AppThunk => async (dispatch) => {
  dispatch(restoreToken(data));
};

export const signInThunk = (data: string): AppThunk => async (dispatch) => {
  dispatch(signIn(data));
};

export const signOutThunk = (): AppThunk => async (dispatch) => {
  dispatch(signOut());
};
