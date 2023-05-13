import { useState } from 'react'
import './Card.css'

export default function Card (prop) {
  const [followStat, setFollowStat] = useState(prop.follow)

  const handlermouseOver = (even) => {
    console.log(even.target.className)
    if (followStat === true) {
      even.target.innerText = 'Unfollow'
      even.target.className = 'Unfollow'
    }
  }
  const handlermouseOut = (even) => {
    if (followStat === true) {
      even.target.innerText = 'Following'
      even.target.className = 'follow'
    }
  }
  const handlerClick = (even) => {
    if (followStat === true) even.target.className = 'follow'
    setFollowStat(!followStat)
  }

  return (
    <div className='card'>
      <div>
        <img src={prop.image()} alt='image' className='avatar' />
        <div className='infoText'>
          <div className='nombre'>
            <a href=''>{prop.nombre}</a>
          </div>
          <div className='usuario'>
            <a href=''>@{prop.usuario}</a>
          </div>
        </div>
        <button
          onMouseOver={handlermouseOver}
          onMouseOut={handlermouseOut}
          className='follow'
          onClick={handlerClick}
        >
          {followStat ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  )
}
