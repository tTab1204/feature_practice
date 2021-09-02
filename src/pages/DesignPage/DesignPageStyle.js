import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200vh;
  background: #ecf0f3;
`;
export const CardWrapper = styled.div`
  padding: 30px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const ImgAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  margin: 0 5px;
  background: #ecf0f3;
  border-radius: 50%;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const InnerArea = styled.div`
  height: calc(100% - 25px);
  width: calc(100% - 25px);

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  text-align: center;
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: #31344b;
  margin: 10px 0 10px 0;
  line-height: 200%;

  width: 290px;
  height: 60px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Writer = styled.div`
  font-weight: 400;
  color: #44476a;
  font-size: 13px;
`;

export const SocialIcons = styled.div`
  margin: 15px 0 25px 0;
  & > a {
    text-decoration: none;
    color: inherit;
    position: relative;
    height: 40px;
    width: 40px;
    display: inline-flex;
    margin: 0 5px;
    border-radius: 50%;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
  }

  & > a:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > a > span {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 40px;
    z-index: 5;
  }

  & > a > .instagram {
    color: #e1306c;
  }

  & > a > .linkedin {
    color: #4267b2;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Button = styled.button`
  position: relative;
  width: 80px;
  padding: 12px 0;
  font-size: 17px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  color: #31344b;
  margin-bottom: 2rem;
  z-index: 4;

  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;

  &:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #ecf0f3;
    border-radius: 5px;
    z-index: -1;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > span > svg {
    vertical-align: unset;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 75%;
  margin-top: 7px;
  padding: 0 5px;
  justify-content: space-between;
`;

export const InformationWrapper = styled.div`
  color: #31344b;
  font-size: 17px;

  /* &::before {
    position: absolute;
    content: '';
    width: 2px;
    height: 100%;
    background: #e0e6eb;
    margin-left: -25px;
  } */

  & > span > svg {
    vertical-align: unset;
  }

  & > span {
    margin-left: 3px;
  }
`;

export const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 300px;
  background: #dde1e7;
  border-radius: 5px;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
  margin-right: 40px;
`;

export const Toggle = styled.div`
  height: 40px;
  width: 100px;

  & > input {
    position: relative;
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: ${({ onToggle }) => (onToggle ? 'lightblue' : '#dde1e7;')};
    outline: none;
    -webkit-appearance: none;
    border-radius: 25px;
    box-shadow: -8px -4px 8px 0px #ffffff73,
      8px 4px 12px 0px rgba(94, 104, 121, 0.288),
      inset -4px -4px 4px 0px #ffffff73,
      inset 4px 4px 4px 0px rgba(94, 104, 121, 0.288);
  }

  & > input:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: #dde1e7;
    transition: left 0.2s ease;

    border-radius: 50%;
    box-shadow: -8px -4px 8px 0px #ffffff73,
      8px 4px 12px 0px rgba(94, 104, 121, 0.288);
  }

  & > input:checked:before {
    left: 60px;
    box-shadow: -8px -4px 8px 0px #ffffff73;
  }
`;

export const ToggleText = styled.div`
  margin-left: 20px;
  font-size: 20px;
  letter-spacing: 0.2px;
`;

export const DropdownContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  width: 200px;
  height: 70px;
  background: #ecf0f3;
  cursor: pointer;

  border-radius: 50px;
  box-shadow: -8px -4px 8px 0px #ffffff76,
    8px 4px 12px 0px rgba(94, 104, 121, 0.288);
`;

export const DropdownText = styled.div`
  display: flex;
  background: none;
  color: #37373d;
  font-size: 1.2em;
  cursor: pointer;

  & > .field {
    padding-top: 10px;
  }

  & > .arrow {
    position: relative;
    height: 40px;
    width: 40px;
    display: inline-flex;
    margin: 0 5px;
    margin-left: 50px;
    margin-right: -10px;
    border-radius: 50%;
    z-index: 4;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: -3px 3px 7px #ffffff, 3px 3px 5px #ceced1;
  }

  & > .arrow:hover::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    background: #ecf0f3;
    border-radius: 50%;
    box-shadow: inset -3px 3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }

  & > .arrow > span {
    padding-top: 12px;
    padding-left: 12px;
    font-size: 18px;
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 80px;
  width: 200px;
  background: #ecf0f3;
  border-radius: 20px;
  box-shadow: -8px -4px 8px 0px #ffffff76,
    8px 4px 12px 0px rgba(94, 104, 121, 0.288);

  & > li {
    position: relative;
    padding: 15px;
    list-style-type: none;
    color: #37373d;
    transition: all 0.2s ease;
  }

  & > li:first-child {
    border-radius: 20px 20px 0 0;
  }

  & > li:last-child {
    border-radius: 0 0 20px 20px;
  }

  & > li:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
