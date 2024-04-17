import './index.css'

const Login = props => {
  const {onclick} = props
  return (
    <button onClick={onclick} className="btnStyle">
      Login
    </button>
  )
}

export default Login
