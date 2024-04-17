import './index.css'

const Message = props => {
  const {msg} = props
  return <h1 className="headStyle">{msg}</h1>
}
export default Message
