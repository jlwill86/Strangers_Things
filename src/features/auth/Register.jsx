
import { useState } from "react"

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    return <>
  
  <h2>Register</h2>
  <form >
  <label >
      Email
      <input type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
  </label>
  <label htmlFor="">
      password 
      <input type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
       />
  </label>
  <button>Register</button>
  {/* { error && <div>{error.data.message}</div>} */}
  </form>
  </>
}