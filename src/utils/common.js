const EMAIL_REGEX = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
);
const passwordCapitalCheckRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])/);
const passwordSpecialCheckRegex = new RegExp(/(?=.*[0-9])(?=.*[@$!%*#?&])/);

export const emailValidator = {
  format: {
    invalidText: '형식에 맞지 않는 이메일 입니다.',
    validator(val) {
      return EMAIL_REGEX.test(val);
    },
  },
};

export const passwordValidator = {
  length: {
    validator: (val) => val.length > 7 && val.length < 13,
    invalidText: '8~12자 이내로 입력해 주세요. ',
  },
  capital: {
    validator: (val) => passwordCapitalCheckRegex.test(val),
    invalidText: '영 대소문자를 혼합하여 입력해 주세요.',
  },
  numberAndSpecialChar: {
    validator: (val) => passwordSpecialCheckRegex.test(val),
    invalidText: '숫자, 특수문자를 포함해 주세요.',
  },
};
