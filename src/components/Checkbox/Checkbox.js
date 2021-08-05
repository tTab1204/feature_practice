import React from 'react';
import { style } from './CheckboxStyle';
export default function Checkbox(props) {
  return (
    <div>
      <Container>
        <HiddenCheckBox
          type="checkbox"
          checked={props.checked}
          // onClick={props.onClick}
        />
        <CheckBox checked={props.checked} onClick={props.onClick}>
          <Icon viewBox="0 0 24 24">
            <polyline points="19 7 10 17 5 12" />
          </Icon>
        </CheckBox>
      </Container>
    </div>
  );
}
const { Container, HiddenCheckBox, CheckBox, Icon } = style;
