import React, { useEffect, useState } from 'react';
import { Success, Form, Header, Label, Input, LinkContainer, Button, Error } from './RegisterPageStyle';
import { Link } from 'react-router-dom';
import { emailValidator, passwordValidator } from '../../utils/common';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const [isEmailInvalid, setIsEmailInvalid] = useState(null);
  const [emailInvalidText, setEmailInvalidText] = useState('');

  const [isPwLengthInValid, setIsPwLengthInValid] = useState(null);
  const [isPwCharInValid, setIsPwCharInValid] = useState(null);
  const [isPwEngInValid, setIsPwEngInValid] = useState(null);

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const validateEmail = (value) => {
    if (!emailValidator.format.validator(value)) {
      setEmailInvalidText(emailValidator.format.invalidText);
      setIsEmailInvalid(true);
      return;
    }
    setIsEmailInvalid(false);
  };

  const onChangeEmail = (value) => {
    validateEmail(value);
    setEmail(value);
  };

  const validatePassword = (value) => {
    if (!passwordValidator.length.validator(value)) {
      setIsPwLengthInValid(true);
    } else setIsPwLengthInValid(false);

    if (!passwordValidator.capital.validator(value)) {
      setIsPwEngInValid(true);
    } else setIsPwEngInValid(false);

    if (!passwordValidator.numberAndSpecialChar.validator(value)) {
      setIsPwCharInValid(true);
    } else setIsPwCharInValid(false);
  };

  const onChangePassword = (value) => {
    validatePassword(value);
    setPassword(value);
    setMismatchError(value !== passwordCheck);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('회원가입 성공!');
  };

  useEffect(() => {
    if (
      !mismatchError &&
      email &&
      password &&
      !isEmailInvalid &&
      !isPwLengthInValid &&
      !isPwCharInValid &&
      !isPwEngInValid
    ) {
      setRegisterSuccess(true);
    } else setRegisterSuccess(false);
  }, [mismatchError, email, isEmailInvalid, password, isPwLengthInValid, isPwCharInValid, isPwEngInValid]);

  return (
    <>
      <div id="container">
        <Header>Sign Up</Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <span>이메일 주소</span>
            <div>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
                placeholder="이메일 입력"
              />
            </div>
            {!email && <Error>이메일을 입력해주세요.</Error>}
            {email && isEmailInvalid && <Error>{emailInvalidText}</Error>}
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => onChangePassword(e.target.value)}
                placeholder="8~12자 이내, 영대소문자, 숫자, 특수문자 포함"
              />
            </div>
            {password && (
              <div>
                {isPwLengthInValid && <Error>8~12자 이내로 입력해 주세요.</Error>}
                {!isPwLengthInValid && <Success>8~12자 이내로 입력해 주세요.</Success>}
                {isPwEngInValid && <Error>영 대소문자를 혼합하여 입력해 주세요.</Error>}
                {!isPwEngInValid && <Success>영 대소문자를 혼합하여 입력해 주세요.</Success>}
                {isPwCharInValid && <Error>숫자, 특수문자를 포함해 주세요.</Error>}
                {!isPwCharInValid && <Success>숫자, 특수문자를 포함해 주세요.</Success>}
              </div>
            )}
            {!password && <Error>비밀번호를 입력해주세요.</Error>}
          </Label>
          <Label id="password-check-label">
            <span>비밀번호 확인</span>
            <div>
              <Input
                type="password"
                id="password-check"
                name="password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                placeholder="비밀번호 재입력"
              />
            </div>
            {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
            {password && !mismatchError && <Success>비밀번호가 일치합니다.</Success>}
          </Label>
          <Button type="submit" disabled={!registerSuccess} registerSuccess={registerSuccess}>
            {registerSuccess ? '회원가입 가능' : '회원가입 불가능'}
          </Button>
        </Form>
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link to="/register">로그인 하러가기</Link>
        </LinkContainer>
      </div>
    </>
  );
};

export default RegisterPage;
