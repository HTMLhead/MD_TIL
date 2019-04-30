# Class 와 prototype의 차이

---

예전 ES5 문법에서는 (Class가 js에 없을 시절) prototype을 함수로 만들어 사용했다고 한다.
근데 이번에 기능은 똑같되 다른점이 `별로 없는` ES6를 이용하면 매우 간단하게 prototype을 만들 수 있다고 한다. 그래서 사람들은 이것을 문법설탕 이라고도 부른단다.

근데 과연 class와 prototype이 똑같은 역할을 할까? 아래의 예제를 통해서 좀 알아보자.

```javascript
const solution = (name) => {
	return name
}

Class classSolution {
	constructor(name) {
		console.log(name);
		return name
	}
}

solution('ES5');// 'ES5'
classSolution('ES6');//Uncaught TypeError: Class constructor classSolution cannot be...
```

이런 메세지가 뜬다. class로 만들게 되면 생성자 함수로 밖에는 사용할 수 없게 되는 것이다. 이렇게 되면, constructor에 있는 return 값이 얼마나 무의미한 값이 되는지 알 수 있다.

class는 블록 스코프의 속성을 가지고 있으며 let 과 const와 마찬가지로 TDZ가 존재하고 호이스팅이 되지 않는다.