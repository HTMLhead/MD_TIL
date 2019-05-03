# react Context

---

상태를 관리하던 도중, Context 와 Reducer의 필요성을 느끼게 되어 공부하게 되었다.

context는 모든 상태들을 props로 넘기는 것이 성가신 일로 느껴져 그것을 유용하게 쓰기 위해서 만들어졌다고 한다.
만들때는 createContext라는 명령어로 만들 수 있다.

```javascript
const ThemeCxt = react.createContext('light');

const Theme = () => {
  return (
  	<ThemeCxt.provider value='dark'>
    	<Something>
    </ThemeCxt.provider>
  )
}

function 
```

그리고 아래 코드에 provider를 추가해 주어 이런 방식으로 사용할 수 있다. 그렇게 되면, provider 내부에 있는 component 들은 더이상 props를 사용하지 않아도 된다.

context를 사용할 때 주의해야 할 사항은, 이 상태를 많은 곳에서 사용할 때만 사용해야 한다는 것이다. context를 사용한 component는 재사용 되기 어렵기 떄문에 문제가 될 수 있다. 그저 그 상태를 여러단계를 거쳐서 넘겨주어야 하는 상황이라면 composition을 사용하는 것을 추천한다. {props.children}이라는 것을 랜더링하는 메서드에 넣어줌으로써, 그 내부에 있는 jsx코드를 전부 다 땡겨올 수 있다.

```javascript
const Theme = (props) => {
	return (
  	<div className="fancy-div-" + props.color>
    	{props.children}
		</div>
  )
}

const ThemeDark = props => {
  return (
  	<Theme color="blue">
    	<div class='fancy-div-inner'
    		im fancy div
    	</div>
    </Theme>
  )
}
```

