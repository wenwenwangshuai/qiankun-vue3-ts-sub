export interface IUserInfo {
  id: number;
  name: string;
  avatar: string;
  permission: {[key: string]: any}
}