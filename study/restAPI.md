# REST API 디자인 가이드

REST API 설계 시 가장 중요한 항목은 다음의 두 가지로 볼 수 있다.

첫 번째, URI는 정보의 자원을 표현해야 한다.
두 번째, 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현해야 한다.

### HTTP METHOD의 알맞은 역할

POST, GET, PUT, DELETE 이 4가지의 Method를 가지고 CRUD를 할 수 있다.

METHOD 역할
| METHOD | 역할 |
| :------------------- | -------------------: |
| POST | POST를 통해 해당 URI를 요청하면 리소스를 생성한다. |
| GET | GET를 통해 해당 리소스를 조회한다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다.|
| PUT | PUT를 통해 해당 리소스를 수정한다. |
| DELETE | DELETE를 통해 리소스를 삭제한다.|

### URI 설계 시 주의할 점

1. 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용
   `ex)http://restapi.example.com/houses/apartments`
2. URI 마지막 문자로 슬래시(/)를 포함X
   URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것이고, 역으로 리소스가 다르면 URI도 달라져야함. REST API는 분명한 URI를 만들어 통신을 해야 하기 때문에 혼동을 주지 않도록 URI 경로의 마지막에는 슬래시(/)를 사용하지 않음.

```
http://restapi.example.com/houses/apartments/ (X)
http://restapi.example.com/houses/apartments  (0)
```

3.  하이픈(-)은 URI 가독성을 높이는데 사용

4.  밑줄(\_)은 URI에 사용하지 않음.
    글꼴에 따라 다르긴 하지만 밑줄은 보기 어렵거나 밑줄 때문에 문자가 가려지기도 함(결국 가독성 때문)

5.  URI 경로에는 소문자가 적합.
    URI 경로에 대문자 사용은 피하도록 해야 합니다. 대소문자에 따라 다른 리소스로 인식하게 되기 때문입니다. `RFC 3986(URI 문법 형식)은 URI 스키마와 호스트를 제외하고는 대소문자를 구별하도록 규정하기 때문`이라는데...뭔 소린지..

6.  파일 확장자는 URI에 포함시키지 않음.
    `http://restapi.example.com/members/soccer/345/photo.jpg (X)`
    REST API에서는 메시지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URI 안에 포함시키지 않음. Accept header를 사용하도록 하자.

### 자원을 표현하는 Colllection과 Document

Collection과 Document에 대해 알면 URI 설계가 한 층 더 쉬워짐. DOCUMENT는 단순히 문서로 이해해도 되고, 한 객체라고 이해하셔도 될 듯. 또한 컬렉션은 문서들의 집합, 객체들의 집합으로 보면 됨. 컬렉션과 도큐먼트는 모두 리소스라고 표현할 수 있고, URI에 표현됨.
ex)`http:// restapi.example.com/sports/soccer`
위 URI를 보면 sports라는 컬렉션과 soccer라는 도큐먼트로 표현되어 있는 것임. 좀 더 예를 들면

ex)`http:// restapi.example.com/sports/soccer/players/13`
sports, players 컬렉션과 soccer, 13(13번인 선수)를 의미하는 도큐먼트로 URI가 이루어지게 됨.

여기서 중요한 점은 컬렉션은 복수로 사용하고 있다는 점. 좀 더 직관적인 REST API를 위해서는 컬렉션과 도큐먼트를 사용할 때 단수 복수도 지켜주어야 함.
