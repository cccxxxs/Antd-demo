const test = {
  namespace: 'test',

  state: {
    time: +new Date(),
    name: 'mkmin',
  },

  effects: {
    *effectTime(_: any, { call, put }: any) {
      const time = yield call(getnumber);
      yield put({
        type: 'reducerTime',
        payload: {
          time,
        },
      });
    },
  },

  reducers: {
    reducerTime(state: any, action: { payload: { time: any } }) {
      const { time } = action.payload;
      return { ...state, time };
    },
  },

  // subscriptions: {
  //   changeTime({ dispatch, history}) {
  //     window.onclick = () => {
  //       console.log("页面被点击了");
  //     }
  //   },
  // }
};

export default test;
async function getnumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(+new Date());
    }, 0);
  });
}
