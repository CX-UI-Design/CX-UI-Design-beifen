import Cookies from 'js-cookie';

const sideBar = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      loadStatus: false,
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      console.log(state.sidebar.opened);
    },
    LOAD_STATUS: state => {
      state.sidebar.loadStatus = true;
    }
  },
  actions: {
    ToggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
    },
    LoadStatus: ({commit}) => {
      commit('LOAD_STATUS')
    },
  }
};
export default sideBar;
