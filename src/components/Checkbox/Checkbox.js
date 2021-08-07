import React from 'react';
import {
  CheckBox,
  CheckboxContainer,
  CheckIcon,
  HiddenCheckBox,
} from './CheckboxStyle';

export default function Checkbox({ onChangeCheckbox, isItemChecked }) {
  return (
    <CheckboxContainer>
      <HiddenCheckBox type="checkbox" defaultChecked={isItemChecked} />
      <CheckBox checked={isItemChecked} onClick={onChangeCheckbox}>
        <CheckIcon viewBox="0 0 24 24">
          {/* polyline: 여러 개의 점을 이을 때 사용함 */}
          <rect
            fill="#52c41a"
            rx="2"
            ry="2"
            width="14"
            height="14"
            x="5"
            y="-2"
          />
        </CheckIcon>
      </CheckBox>
    </CheckboxContainer>
  );
}
