import { IUserInfo } from '@/interface/user';
import { Module, ActionTree, MutationTree } from 'vuex';
import type { IUserState, IModulesState } from '@/interface/vuex';

const state: IUserState = {
  userInfo: {
    id: 0,
    name: 'xxxx',
    avatar: 'https://xxx.com',
    permission: {}
  }
};

const mutations: MutationTree<IUserState> = {
  SET_USER_INFO: (state: IUserState, userInfo: IUserInfo) => {
    state.userInfo = userInfo;
  }
};

const actions: ActionTree<IUserState, IModulesState> = {
  // get user info
  getUserInfo: ({ commit, state }) => {
    return new Promise((resolve) => {
      commit('SET_USER_INFO', {
        id: 1,
        name: 'xxxx',
        avatar: 'https://xxx.com',
        permission: {
          vueLogo: true
        }
      });
      resolve(state);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
} as Module<IUserState, IModulesState>;
