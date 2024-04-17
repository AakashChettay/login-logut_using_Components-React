import './index.css'

const Logout = props => {
  const {onclick} = props
  return (
    <button onClick={onclick} className="btnStyle">
      Logout
    </button>
  )
}

export default Logout
