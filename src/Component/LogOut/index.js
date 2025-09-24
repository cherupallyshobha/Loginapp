import './index.css' 

const Logout = (props) => {
  const {logout} = props
  
  return(
    <div className='container'>
       <button type='button' className='logout-button' onClick={logout}>
          logout
       </button>
    </div>
  )
}
export default Logout