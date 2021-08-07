import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  // 컨테이너를 본질적으로 사라지게 하여
  // DOM에서 다음 레벨 위로 요소의 자식 요소를 자식 요소로 만드는 css 속성
  display: contents;
  vertical-align: middle;
`;

// svg 태그: svg 그래픽을 담기 위한 요소.
// svg 태그 내에는 원, 사각형, 다각형, 라인, path 등의 요소를 담을 수 있다.
// SVG태그는 파일의 모든 요소와 모든 속성에 애니메이션을 적용할 수 있다.
export const CheckIcon = styled.svg`
  fill: none;
  // 선 색 속성
  stroke: white;
  // 선 굵기 속성
  stroke-width: 2px;
`;

export const HiddenCheckBox = styled.input`
  position: absolute;
  border: 0;
  padding: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

export const CheckBox = styled.div`
  cursor: pointer;
  // 수평 구조를 만드는 display 속성
  // inline과의 차이점: inline-block은 요소의 높이와 너비를 지정 가능
  //display: inline-block;
  width: 20px;
  height: 20px;
  border: solid 0.1rem #dddddd;
  background: white;
  border-radius: 5px;
  margin-right: 10px;
  transition: all 300ms;
  // 다른 스타일 컴포넌트도 동적으로 불러와서 사용 가능
  ${CheckIcon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
