import { IDeveloper } from './developers';

export type MetaProperties = { loading: boolean; error: boolean };

export interface ReduxState {
  auth: IDeveloper & MetaProperties & { token: string | null; isAuthenticated: boolean };
}

export interface Action {
  type: string;
  payload: any;
}
