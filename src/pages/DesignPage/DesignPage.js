import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Container,
  ImgArea,
  ImgAreaWrapper,
  InformationContainer,
  InformationWrapper,
  InnerArea,
  SocialIcons,
  Title,
  Wrapper,
  Writer,
} from './DesignPageStyle';
import {
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  LikeOutlined,
  EyeOutlined,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import js_logo from 'assets/JS.png';
import react_logo from 'assets/React.png';

const DesignPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onHandleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default DesignPage;
