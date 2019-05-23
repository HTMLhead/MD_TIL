# HTTP (HyperText Transfer Protocol)

### HTTP 는 표준스펙이다.

많은 클라이언트와 많은 서버간에 데이터를 교환하기 위해서는 표준이 필요함.

- 0.9 (1990~)
  - **팀 버너스리**
- 1.0 (1996~)
- 1.1 (1999~)
  - 장기집권하며 대부분의 웹 환경은 1.1을 따르는 중.
- SPDY (2012~)
  - 구글이 주도적으로 진행.
- 2.0 (2015~)
  - SPDY를 통해서 표준으로 지정.
  - server push
  - stream 방식의 멀티 request처리
  - TLS기반

---

# TCP

HTTP 아래 layer에서 올바른 데이터 전송을 위한 갖가지 제어를 한다.

데이터 전송을 위해서 **3-Way Handshake `양쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장하는 것을 알 수 있도록 하는 것`** 을 거쳐 **TCP Socket** connection을 생성함.

```
TCP Socket-신뢰할 수 있는 통신
UDP Socket-몇가지 신뢰도는 포기하되 좀 더 직접적인 통신
```

- SYN(Synchronization : 동기화) -> SYN-ACK -> ACK(Acknowledgement : 응답, 승인)
  `STEP1, client는 server에 접속을 요청하는 SYN패킷을 보냄 client는 SYN을 보내고 SYN-ACK응답을 기다리는 SYN_SENT 상태가 됨`
  `STEP2, server는 SYN요청을 받고 client에게 요청을 수락한다는 ACK와 SYN flag가 설정된 패킷을 발송, client가 다시 ACK로 응답하기를 기다림. 이때, B서버는 SYN_RECEIVED상태가 됨.`
  `STEP3, client 는 server에게 ACK를 보내고 그 이후 연결이 이루어지고 데이터가 오가게 됨. 이때 서버의 상태가 ESTABLISHED 상태가 됨.`

웹애플리케이션 레벨에서는 TCP를 직접 컨트롤 하진 않는다. (Web socket은 TCP 소켓제어 수준의 API를 제공하긴 함)

최근 HTTP/2 UDP를 활용한 QUIC방법을 활용한 데이터 통신방법이 제안되어 있음.
(Quick UDP Internet Connections)

---

# 상상해보자

### URL 접속해서 화면에 보이기까지는 어떤 일이 일어나는가?

- Https://google.com 에 접속 후에 화면에 보이기까지를 생각해보자.
  자원의 주소
- 어떤 요청이전달되고, 어떤 부분을 해석해서, 어떤 자원을 응답하는가?
  자원의 주소로 들어가서 html파일을 해석해서 dom트리를 그리고 render트리를 그리고 painting메서드를 호출한 다음 표출해준다.
- 브라우저는 이를 어떻게 해석하는가?
  파서를 통해서 해석함

---

#Request - Response (중요\*)

### 1. URL(uniform resource locator)

- URL은 고유한 웹자원의 address 이다!
- Scheme, hostname, port, path

### 2. Method

- GET/POST/PUT/DELETE

- 기본 요청은 GET이다.
- 데이터를 전송하기 위해서는 POST요청을 보낸다.
- 이외에도 다른 HTTP Method가 있다.

### 3. Header

- Client/server모두 사용
- body이외의 모든 정보를 표시한다.
- Client->server

  - User-Agent, Referer, Authorization

- Server->Client

  - Content-type (MIME타입)
    - text/html
    - Application/x-www-form-urlencoded
    - multipart/form-data
    - application/json
  - Content-length
    - body의 길이(압축된 상태)
  - Content-encoding
    - deflate, gzip, br(brotli), identity
  - Date

- 모든 headers
  - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>
  - <https://www.iana.org/assignments/message-headers/message-headers.xhtml>

### 4. STATUS CODE

주고받고, 적절한 응답은 code로 표현

- 2xx 정상응답
- 3xx 정상응답, 데이터 응답이 아닌, cache나 redirect 사용.
- 4xx 잘못된요청
- 5xx 서버문제

---

# HTTP는 더 나은 UX를 위해 개선되고 있다.

**결론 : 빠르고** **안전한 웹**이 필요하다 !!

### 1. HTTP는 상태를 갖지 않는다. stateless !

#### 문제

매번 handshake(1.5회 왕복) 로 인해 round-trip time >.<

#### 해결

- Keep-alive 속성(H1.1) , pipeline(순서가 여전히 중요해서 blocking되는 문제 있음),
- Stream (H2)
  - single tcp connection에 여러개의 데이터를 병렬로 전송.
- Server push (H2)
  - 받을 거 같아서 미리 준다.
- QUIC
  - 구글이 밀고 있는 UDP기반 통신.(TCP가 아니다)
- Cache 정책(cache-control) 매우 복잡
  - 갱신일주고받기 : 서버가 주는 Last-Modified , If-Modified-Since
  - 파일의 해시값으로 비교 : 서버가 주는 Entity tag(Etag), If-none-match
  - 요청 안보내기 : Expires
  - 다양한 캐시 설정 : Cache-control

### 2. Security

#### 문제

훔쳐보기, 가로채기, 인척하기

#### 해결

- TLS(SSL)로 안전한데이터 통신.
- SOP(same origin, policy)로 자원에 대한 접근 제어

### 3. stateful 방식이 필요한 경우엔 어떡하지?

#### 문제

steteless환경에서, 로그인 한 사람을 어떻게 구별해야 하지?

#### 해결

- 쿠키 (인증용도로 부적절)로 작은 정보를 기억하기

- session을 통해 인증된 사용자 정보를 기억하기.(메모리/DB)
- token 기반 인증(authentication)으로 클라이언트에서 정보를 기억하기
- Web Socket으로 양방향 통신을 지원 (단톡방)

---

# 이정도는 알아야하지 않겠나?! 자가진단

_문제_

1. Status Code 중 300번대 코드는 어떤 의미 인가요?
   캐시나 리다이렉트 사용
2. http method 중 post와 put의 차이는?
   post는 데이터를 집어넣는 것, put은 데이터를 수정하는 것
3. HTTP가 무엇인지 한줄로 간단히 설명해보세요
   서버와 클라이언트간의 통신에 사용되는 표준스펙
4. http 헤더는 왜 필요한지, HTTP 헤더의 여러가지 속성중 3가지만 적고 어떤 내용인지 간단하게 적어보세요.
   전송하는 데이터가 어떤 것인지, 전송이 되어 온 데이터가 어떤 것인지 확인하기 위해서 사용이 되곤 함.
   content-type, authrization, content-length;
5. URL의 구조를 예시와 함께 간단히 설명해보세요
   https:// rootURl/{collection}/{index && 고유한ID}
   루트 URL의 collection에 (db) 고유한 id의 정보를 GET메서드로 가져올 수 있도록 하는 URL
6. HTTP 메소드 중 POST 메소드는 어떤 용도인가요?
   post는 데이터를 보내서 추가함. 예를들면 회원가입을 할 때 입력받은 사용자의 정보를 추가하는 경우에 사용할 수 있음.
7. Status Code 중 400번대 코드는 어떤 의미 인가요?
   client쪽 에러 코드.
8. 캐시는 어디에 저장이 되나요?
   ?
9. 쿠키는 무엇이고 왜 필요한가요?
   사용자의 개인장치에 다운로드 되고 브라우저에 저장되는 작은 텍스트 파일.  
   보안영역의 로그인 상태에 사용될 수 있음.  
   유저의 웹사이트 방문 내역을 추적하며 쿠키 제공자가 접속자의 경향 및 웹사이트의 이용패턴을 파악하여 여러가지로 사용 가능
10. 세션은 무엇을 하나요? 세션의 장점과 단점은 무엇일까요?
    로그인 기능을 사용할 때, 로그인된 사용자의 정보를 저장하는 경우에 사용되기도 함. 장점으로는 보안적으로 쿠키보다 더 성능이 우수함, 하지만 서버쪽에 저장되는 정보이기 때문에 쿠기보다 속도가 느리고, 무분별하게 추가하다 보면 속도가 많이 느려짐.
11. HTTP is stateless라고 하는데 그 의미가 무엇이고 이것을 보완해주는 방법은?
    상태를 유지하지 않고 요청을 보내거나 받도록 함. 로그인을 했다는 상태가 필요할 때가 많은데 보통 이럴 때 쿠키나 세션을 사용해서 요청에 같이 보내줌.
12. HTTP상태코드인 GET과 POST의 차이를 설명하시오.
    GET은 요청, POST는 정보추가
