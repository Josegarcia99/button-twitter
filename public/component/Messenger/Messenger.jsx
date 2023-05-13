/* eslint-disable react/prop-types */
import './Messenger.css'

function Messenger (props) {
  return (
    <div className='Messenger-component'>
      <h2>
        <span>{props.texto}</span>
      </h2>
    </div>
  )
}

export default Messenger
