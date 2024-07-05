import styles from "@/app/UI/login/login.module.css"
import LoginForm from "../UI/login/loginForm/loginForm"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage