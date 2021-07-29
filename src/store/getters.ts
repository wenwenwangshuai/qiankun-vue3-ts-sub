import { GetterTree } from 'vuex';
import { IModulesState } from '@/interface/vuex';

const getters = {
  userInfo: (state: IModulesState) => state.user.userInfo
};
export default getters as GetterTree<IModulesState, IModulesState>;
