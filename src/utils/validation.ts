/**이메일 유효성 검사 */
export const checkEmail = (email: string) => {
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  return emailRegex.test(email);
};

/**닉네임 유효성 검사 */
export const checkUserName = (nickname: string) => {
  const nicknameRegEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{4,12}$/;
  return nicknameRegEx.test(nickname);
};

/**비밀번호 유효성 검사 */
export const checkPassword = (password: string) => {
  const passwordRegEx = /^[A-Za-z0-9]{4,20}$/;

  let message = "";

  if (password.match(passwordRegEx) === null) {
    //형식에 맞지 않을 경우 아래 콘솔 출력
    message = "비밀번호 형식을 확인해주세요";
  } else {
    // 맞을 경우 출력
    message = "";
  }
  return message;
};
