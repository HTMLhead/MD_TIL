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
