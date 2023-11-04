import { useState } from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

const handleLogin=(event)=>{
  event.preventDefault();


const success = (response) =>{
  setUser(response.data);
  localStorage.setItem('loggedIn', true)

  navigate("/")
}

function error(err){
  alert(err.message);
}

const body = {
  username,
  password,
}
    axios.post('https://dummyjson.com/auth/login', body)
    .then(success)
    .catch(error)
  }
    
    // handleLogin = (event) =>{
    //     // event.preventDefault();
    //     // if(this.state.userName === "Maruf" && this.state.email === "email@gmail.com"){
    //     //     window.open("https://www.youtube.com", "blank")
    //     // }else{
    //     //     alert("Wrong UserName Or Email");
    //     // }
    
    // }

    const loggedIn = localStorage.getItem('loggedIn')
      
  return (
    <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form action="#" method='#' className='fcontact'>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} name='userName' placeholder='User Name' autoComplete='off' required />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} name='userPass' placeholder='Password' autoComplete='off' required />
                <input className='contact-btn' onClick={handleLogin} type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
  )
    
}

export default Login;