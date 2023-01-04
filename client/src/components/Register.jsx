import React,{useState} from 'react'

function Register() {
    const [name, setName] = useState('test')
    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('test')


const handleSubmit = async (e) => {
e.preventDefault()
const response = await fetch('http://localhost:5001/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name, email, password
    })
})

const data = await response.json()
console.log(data)
}
    
  return (
    <div>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value) } />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value) } />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) } />
        <input type='submit' value='Register' />
</form>
    </div>
  )
}

export default Register