import './MessageError.css'

export const MessageError = ({ message }) => {
  const handleError = (messageError) => {
    if (messageError.code === "auth/weak-password") {
      return "Error: Password should be at least 6 characters"
    } else if (messageError.code === "auth/invalid-email") {
      return "Error: The email is incorrect"
    } else if (messageError.code === "auth/email-already-in-use") {
      return "Error: This email is already used"
    } else if (messageError.code === "auth/user-not-found") {
      return "Error: This user do not exist"
    } else if (messageError.code === "auth/wrong-password") {
      return "Error: The password is incorrect"
    } else if (messageError.code === "auth/account-exists-with-different-credential") {
      return "Error: This account exists with different credential"
    } else {
      return messageError.message
    }
  }

  return (
    <div className="message-container">
      {message && handleError(message)}
    </div>
  )
}
