/**이메일 유효성 검사 */
export const isValidEmail = (email: string) => {
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  return emailRegex.test(email);
};

/**닉네임 유효성 검사 */
export const isValidUsername = (nickname: string) => {
  const nicknameRegEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{4,12}$/;
  return nicknameRegEx.test(nickname);
};

/**비밀번호 유효성 검사 */
export const isValidPassword = (password: string) => {
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegEx.test(password);

};
