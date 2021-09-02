import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  CardWrapper,
  Container,
  ImgArea,
  ImgAreaWrapper,
  InformationContainer,
  InformationWrapper,
  InnerArea,
  SocialIcons,
  Title,
  Toggle,
  ToggleContainer,
  Writer,
  ToggleText,
  DropdownContainer,
  DropdownText,
  Options,
} from './DesignPageStyle';
import {
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  EyeOutlined,
  HeartOutlined,
  HeartFilled,
  RightOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import js_logo from 'assets/JS.png';
import react_logo from 'assets/React.png';

const DesignPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [onToggle, setOnToggle] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const onHandleClick = () => {
    setIsClicked(!isClicked);
  };

  const onHandleToggle = () => {
    setOnToggle(!onToggle);
  };

  const onHandleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <Container>
      {/* Toggle */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ToggleContainer>
          <Toggle onToggle={onToggle} onClick={onHandleToggle}>
            <input type="checkbox" />
          </Toggle>
          <ToggleText onToggle={onToggle}>
            {onToggle ? 'Checked' : 'Unchecked'}
          </ToggleText>
        </ToggleContainer>

        {/* Button */}
        <ButtonWrapper>
          <Button className="button1">Button1</Button>
          <Button className="button2">Button2</Button>
        </ButtonWrapper>

        {/* Dropdown */}
        <DropdownContainer onClick={onHandleDropdown}>
          <DropdownText isDropdown={isDropdown}>
            <div className="field">Field</div>
            <div className="arrow">
              <DownOutlined />
            </div>
          </DropdownText>
          {isDropdown && (
            <Options>
              <li>Web</li>
              <li>App</li>
              <li>Game</li>
              <li>Machinary</li>
              <li>Security</li>
            </Options>
          )}
        </DropdownContainer>
      </div>

      {/* Card */}
      <CardWrapper>
        <ImgAreaWrapper>
          <ImgArea>
            <InnerArea>
              <img src={js_logo} alt="javascript-logo" />
            </InnerArea>
          </ImgArea>
          <ImgArea>
            <InnerArea>
              <img src={react_logo} alt="react-logo" />
            </InnerArea>
          </ImgArea>
        </ImgAreaWrapper>
        <Title>
          We need front-end developer. <br /> Anyone can join? Feel Free to
          contact us!
        </Title>
        <Writer>Ju Young (Web)</Writer>
        <SocialIcons>
          <Link>
            <GoogleOutlined className="google" />
          </Link>
          <Link>
            <InstagramOutlined className="instagram" />
          </Link>
          <Link>
            <LinkedinOutlined className="linkedin" />
          </Link>
          <Link>
            <GithubOutlined className="github" />
          </Link>
        </SocialIcons>
        {/* <ButtonWrapper>
          <Button className="like">
            Like <LikeOutlined />
          </Button>
          <Button className="views">
            views <EyeOutlined />
          </Button>
        </ButtonWrapper> */}
        <InformationContainer>
          <InformationWrapper>
            {isClicked && <HeartFilled onClick={onHandleClick} />}
            {!isClicked && <HeartOutlined onClick={onHandleClick} />}
            <span>58 Likes</span>
          </InformationWrapper>
          <InformationWrapper>
            <EyeOutlined />
            <span>14 views</span>
          </InformationWrapper>
        </InformationContainer>
      </CardWrapper>
    </Container>
  );
};

export default DesignPage;
