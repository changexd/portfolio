export default (username, password) => {
  let isVerified = null;
  let response = '';

  //extract username before email to see if it suits restriction
  const extractedUsername = username.substring(0, username.indexOf('@'));

  //check if username is an email
  const isEmail = /\S+@\S+\.\S+/;
  //check if username and password have 6-20 chrs and contain at least 1 uppercase and lowercase and number
  const charRestriction = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
  //chack if both contain special characters
  const symbolRestriction = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
  //check if username or password is not in restriction
  if (!username.match(isEmail)) {
    isVerified = false;
    response = '帳號必須為電子郵件且不得為空白';
  } else if (
    extractedUsername.match(symbolRestriction) ||
    password.match(symbolRestriction)
  ) {
    isVerified = false;
    response = '帳號與密碼不得擁有特殊符號';
  } else if (
    extractedUsername.match(charRestriction) &&
    password.match(charRestriction)
  ) {
    let i = 0;
    while (i + 5 < extractedUsername.length) {
      if (password.includes(extractedUsername.slice(i, i + 6))) {
        isVerified = false;
        response = '密碼不能為使用者帳號之連續六個字母';

        break;
      } else {
        isVerified = true;
        response = '審核通過';
        i++;
      }
    }
  } else {
    isVerified = false;
    response = '請輸入6-20位數字與字母';
  }

  return {isVerified, response};
};
