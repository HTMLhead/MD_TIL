# 화살표 함수와 그냥 함수의 차이

---

화살표 함수는 보통 이렇게 작성한다.

```javascript
const sum = (a, b) => a + b;
sum(1, 3);//4
```

여기서 계속 궁금해 했던 왜 화살표 함수를 사용하는데 `const sum = () => {}` 이런 방식으로 쓰는지, 화살표 함수와 그냥 함수는 무슨 차이가 있는지 정리를 해서 적어야 겠다는 생각이 들었다.

우선 왜 `const a = function() {}` 따위로 쓰지않고 `const sum = () => {}` 따위로 쓰는지 알아보자.

함수 선언식은 this, arguments, new.target 을 바인딩 하지 않는다고 한다. 고로 성능이 미미하게 좋아질 수 있다. 여기서 this, arguments, super, new.target이 무엇인지 알아보자면,

arrow function 은 this를 바인딩하지 않는다는 것을 아래의 예제를 통해 알아보자.

```javascript
const obj = {
    a: function() {
        console.log(this)
    },
    b: () => {
        console.log(this);
    }
}

obj.a()//{a: ƒ, b: ƒ}
obj.b()//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

```

예제를 보면 obj.a는 this를 바인딩 하여 obj를 나타내고 있다. 하지만 obj.b 는 this를 바인딩 하지 않아서 window를 가리키게 되었다
`근데 여기서 질문. 왜 use strict 모드에서 함수 선언식을 사용해서 this를 보려고 하면 undefined가 나오는데 화살표함수는 window가 나올까?`
이건 왜 그런지 잘 모르겠다.
arrow function 은 arguments를 바인딩 하지 않는 다는 것은 무슨말일까?

```javascript
const solution = function() {
    console.log(arguments);
}
const arrowSolution = () => {
    console.log(arguments);
}

solution();//Arguments [callee: (...), Symbol(Symbol.iterator): ƒ]
arrowSolution();//Uncaught ReferenceError: arguments is not defined
```

그렇다. 그냥 함수선언식은 arguments라는 것을 자동적으로 가지고 있고, arguments로 들어온 값들을 저 변수를 사용하여 배열로 가져올 수 있지만, arrow function 은 그렇지 않다. 존재하지 않는다는 것이다. 

new.target이 뭔지 알아보자.

```javascript
const solution = function() {
		console.log(new.target)
}

solution()//undefined
```

뭐야 어디에 써먹는거야? 라고 하면 이렇게 써먹을 수 있다.

```javascript
const solution = function () {
    if(!new.target) throw 'dont do that';
	console.log('good job');
}

new solution(); //'good job'
solution(); // 'error: dont do that'
```

아예 생성자 함수 자체로 만들어 버릴 수 있도록 만들어주는 그런것인것 같다. 그런데 arrow Function 을 자체로 생성자 함수로 만들려 하면 이런 결과가 나온다.

```javascript
const arrowSolution = () => {
    console.log('hi');
}

new arrowSolution();//Uncaught TypeError: arrowSolution is not a constructor
```

arrow function 은 그자체로 아예 생성자 함수가 될 수 없는 것이다. 
그리고 arrow funtion은 자체로 익명함수이다. 보통의 함수 표현식 보다 즉시실행함수로 실행하기에 arrow function이 더 좋다는 이야기이다.

이정도만 알고있자. 허허…헤헤ㅓ허허허… 아 또한, 익스플로러에는 호환되지 않는 문법인 것도 알아두자.