import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const CONSTANTS = {
  SATOSHI_VALUE: 1e-8,
  BTC_TO_POUNDS: 5000,
  BUFFER_SIZE: 10
};

export const store = new Vuex.Store({
  strict: true,
  state: {
    connection: null,
    started: false,
    socket: {
      isConnected: false,
      isSubscribed: false,
      message: '',
      reconnectError: false
    },
    transactions: []
  },
  getters: {
    CONSTANTS: () => CONSTANTS,
    started: state => state.started,
    socket: state => state.socket,
    transactions: state => state.transactions
  },
  mutations: {
    SOCKET_ONOPEN: (state, event) => {
      state.socket.isConnected = true;
      state.connection = event.target;
      // subscribe on connect
      state.connection.sendObj({ op: 'unconfirmed_sub' });
      state.socket.isSubscribed = true;
    },
    SOCKET_ONCLOSE: state => {
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR: (state, event) => {
      console.error(state, event);
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE: (state, message) => {
      state.socket.message = message;
      state.transactions.push(message.x);
    },
    UNSUBSCRIBE: state => {
      if (state.socket.isConnected && state.socket.isSubscribed && state.connection) {
        state.connection.sendObj({ op: 'unconfirmed_unsub' });
        state.socket.isSubscribed = false;
      }
    },
    SUBSCRIBE: state => {
      if (state.socket.isConnected && !state.socket.isSubscribed && state.connection) {
        state.connection.sendObj({ op: 'unconfirmed_sub' });
        state.socket.isSubscribed = true;
      }
    }
  },
  actions: {
    subscribe: ({ commit }) => {
      commit('SUBSCRIBE');
    },
    unsubscribe: ({ commit }) => {
      commit('UNSUBSCRIBE');
    }
  }
});
