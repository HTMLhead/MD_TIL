const React = (() => {
  let value;

  return {
    render(Component) {
      const comp = Component();
      comp.render();
      return comp;
    },
    useState(_initVal) {
      function setter(settingValue) {
        value = settingValue;
      }
      if (value === undefined) {
        return [_initVal, setter];
      } else {
        return [value, setter];
      }
    }
  };
})();

function MyComponent() {
  const [foo, setFoo] = React.useState(10);
  return {
    render() {
      setFoo(foo + 1);
      console.log(`foo value is ${foo}`);
    }
  };
}

React.render(MyComponent);
React.render(MyComponent);
React.render(MyComponent);

//실행결과
// foo value is 10
// foo value is 11
// foo value is 12
