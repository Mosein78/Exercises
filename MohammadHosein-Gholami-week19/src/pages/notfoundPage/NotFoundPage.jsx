import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./NotFoundPage.module.css"

function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <div>
        <div className={styles.container}>
            <p> متاسفانه مشکلی پیش آمده است !! | <span>404</span></p>
            <div className={styles.button}>
                <button onClick={()=> navigate("/register")}>ثبت نام</button>
                <button onClick={()=> navigate("/login")}>ورود</button>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage