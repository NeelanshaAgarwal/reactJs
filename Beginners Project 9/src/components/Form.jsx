import { useState } from "react"
import "../style.css"

const Form = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = (e) => {
        e.preventDefault()
        if(userName.length>8){
            setErrorUsername('')
            setUserColor('green')
        }
        else{
            setErrorUsername('Username must be at least 8 characters long.')
            setUserColor('red')
        }

        if(email.includes('@gmail')){
            setErrorEmail('')
            setEmailColor('green')
        }
        else{
            setErrorEmail('Email must contain @gmail')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }
        else{
            setErrorPassword('Password must be at least 8 characters long.')
            setPasswordColor('red')
        }

        if(confirmPassword === password && password!==''){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        }
        else{
            setErrorConfirmPassword('Passwords do not match.')
            setConfirmPasswordColor('red')
        }
    }

  return (
    <>
        <div className="card-image">

        <form>
            <input type="text" placeholder="Name" style={{borderColor: userColor}} value={userName} onChange={e => setUserName(e.target.value)} />
            <p className="error">{errorUsername}</p>

            <input type="email" placeholder="Email"  style={{borderColor:emailColor}} value={email} onChange={e => setEmail(e.target.value)}/>
            <p className="error">{errorEmail}</p>

            <input type="password" placeholder="Password" style={{borderColor: passwordColor}} value={password} onChange={e=> setPassword(e.target.value)}/>
            <p className="error">{errorPassword}</p>

            <input type="password" placeholder="Confirm Password" style={{borderColor: confirmPasswordColor}} value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}/>
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" type="submit" onClick={validate}>Submit</button>
        </form>


        </div>
    </>
  )
}

export default Form