# css 박스모델

---

css 박스모델은 브라우저 엔진이 문서의 레이아웃을 계산할 때 (render Tree를 만들 때), 표준 CSS 기본 박스 모델에 따라 각각의 모델을 사각형의 상자로 표현하고 CSS가 그 상자의 크기를 결정한다.

하나의 박스는 네 부분으로 이루어진다 바깥서부터 margin, border, padding, content가 바로 그것이다.
content는 그 박스가 실제로 포함하고 있는 영상, 사진 등의 컨텐츠를 보여주며 배경 색이나 이미지를 가지고 있기도 한다.
padding 은 콘텐츠 영역을 요소의 안쪽 여백까지 포함하는 크기를 나타낸다.
border는 padding을 포함한 content의 테두리 부분을 나타낸다.
margin은 바깥 여백 경계를 감싼 영역으로써 테두리 요소를 확장해서 요소와 인근 요소 사이의 빈 공간을 포함하도록 만든다.