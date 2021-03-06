## 정리

### 예제 링크

[링크](https://codepen.io/Craven/pen/jPNOPB)

### 동작 원리

- select box에서 선택한 값을 프리뷰하는 요소에 클래스로 넣어 설정한다.
- 따라서 이 방법으로 구현하려면 사용할 폰트를 지정한 뒤 그 폰트를 다 가져와서 각각 클래스를 생성해두고 그 클래스를 프리뷰 요소에 넣어주는 형식으로 구현해야함
- option의 value값과 클래스명을 동일하게 작성하면 편하게 구현 가능
- 다만 동작시 클래스를 싹 지우고 선택한 요소의 클래스만 다시 추가하는 방식이라 성능이 좀 떨어질 것 같음

- link, @import, 로컬에서 가져오기 방법으로 각각 해본 결과 link > local >>> @import 순이였다. link로 가져오는게 제일 좋은 방법인 것 같음

### 작성한 코드

1. select 요소에 change될때 이벤트 리스너를 추가
2. change 되면 e.target.value값으로 선택한 값 가져옴
3. 전체 클래스를 삭제한뒤 가져온 value값의 클래스를 추가해줌

```js
// classList.remove 를 사용하기 위해 사용할 폰트 목록 배열에 할당
const fontList = [
  'openSans',
  'oswald',
  'anton',
  'kaushanScript',
  'rochester',
  'sacramento',
];

// 이벤트 리스너 등록
fontsSelectBox.addEventListener('change', handleFontChange);

// value를 클래스로 넣어줌
const handleFontChange = e => {
  const selectedFont = e.target.value;
  fontPreviw.classList.remove(...fontList);
  fontPreviw.classList.add(selectedFont);
};
```

### 한번에 여러 구글 폰트 가져오기

`@import url('https://fonts.googleapis.com/css?family=Open+Sans|Oswald|Anton|Kaushan+Script|Rochester|Sacramento|Lobster');`
처럼 | 를 이용해서 연결연결하면 사용 가능 font-family 적용시 구글 폰트에 나와있는 예시 참고
