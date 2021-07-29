import { IUserInfo } from './user';

export interface IUserState {
  userInfo: IUserInfo;
}

export interface IModulesState {
  user: IUserState;
}