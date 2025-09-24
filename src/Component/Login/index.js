import './index.css'

const Login = (props) => {
 const {login} = props 
  return(
    <div className='container'>
       <button type='button' className='login-button' onClick={login}>
         Login         
       </button>
    </div>
  ) 
}
export default Login