//Plain 구현
const PlainDispatcher = {
  component: null,
  state: null
};

const Plain = (() => {
  function rerender(Component) {
    Plain.renderComponent(Component);
  }

  return {
    renderComponent(Component) {
      PlainDispatcher.component = Component;
      const component = Component();
      component.render();
      return component;
    },
    useState(_initVal) {
      function setter(settingValue) {
        PlainDispatcher.state = settingValue;
        rerender(PlainDispatcher.component);
      }
      if (PlainDispatcher.state === null) {
        return [_initVal, setter];
      } else {
        return [PlainDispatcher.state, setter];
      }
    },
    useEffect(_callBack) {
      const stateUpdate = Promise.resolve(PlainDispatcher.state);
      stateUpdate.then(res => _callBack());
    }
  };
})();

function plain_test() {
  debugger;
  const [foo, setFoo] = Plain.useState(``);

  const fireEvent = () => {
    setFoo((value => new Date().toLocaleTimeString() || value)());
  };

  Plain.useEffect(() => {
    console.log(`[effect]`);
    console.log(`-----------------------`);
  });

  return {
    render() {
      console.log(`[render] : ${foo}`);
    },
    fakeEvent() {
      fireEvent();
    },
    initComponent() {
      //초기화코드가 있다면 넣을수도 있음
    }
  };
}

let pd = Plain.renderComponent(plain_test);

(async function loop() {
  for (let i = 0; i < 5; i++) {
    debugger;
    await new Promise(resolve =>
      setTimeout(() => {
        pd.fakeEvent();
        resolve();
      }, 1000)
    );
  }
})();
