# eventBubbling 과 eventCapturing 의 차이

---

eventBubbling은 특정 dom에서 이벤트가 발생했을 때, 하위의 요소에서 상위 요소로 전달되어가는 것을 의미함.

`ex) div => container => body`

eventCapturing은 그와 반대로 이행되는 것이라고 보면 됨.

`ex) body => container => div`

이렇게 해서, 겹쳐있는 돔에 이벤트를 동작시키면, 내가 원하는 돔을 클릭했을 때에 원하지 않는 동작까지도 일어날 수 있다.
그것을 방지하기 위해서는 web API 인 event.stopPropagation을 사용하면 됨.

bubbling에서 동작시키게 되면 가장 최하위의 이벤트만 발생하고, capturing에서 사용하게 되면 가장 최상위의 이벤트만 발생시키게 된다.

기본으로는 bubbling으로 되어있는데 이것을 capturing으로 바꾸는 방법은 이벤트를 등록할 때 아래와 같이 등록하면 된다.

```javascript
div.addEventListener('click', {발생시킬 이벤트}, {
		capture: true;//default: false
	});
```



이를 이용해서 event deligation 을 원하는 대로 동작시킬 수 있다. 상위의 돔에 클릭되었을 때 동작시키고 싶은 이벤트를 만들어서 걸고, 거기에 stopPropagation만 걸어주기만 하면 된다.