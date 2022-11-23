export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)

  return isMailValid && isPasswordValid
}

export const validateRegisterForm = ({ mail, password, username }) => {
  const isMailValid = validateMail(mail)
  const isPasswordValid = validatePassword(password)
  const isUsernameValid = validateUsername(username)

  return isMailValid && isPasswordValid && isUsernameValid
}

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12
}

const validateMail = (mail) => {
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return emailPattern.test(mail)
}

const validateUsername = (username) => {
  return username.length > 2 && username.length < 12
}