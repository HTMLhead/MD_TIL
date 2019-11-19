module.exports = function(api) {
  api.cache(true); // 바벨은 설정 파일을 계속해서 실행하고 싶지 않아함(만약 내용이 같다면) 그럴때 cache해서 사용할 수 있도록 해주는 함수

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        useBuiltIns: "usage",
        corejs: "3",
        modules: false
      }
    ],
    ["@babel/preset-react"]
  ];

  return {
    presets
  };
};
