import Messenger from '../public/component/Messenger/Messenger.jsx'
import Suggestions from '../public/component/Suggestions/Suggestions.jsx'
import Api from '../public/component/Info/Info.jsx'
import './App.css'

function App () {
  return (
    <div className='component'>
      <aside className='suggestions'>
        <Messenger texto='Who to follow' />
        <Suggestions datos={Api} />
      </aside>
    </div>
  )
}

export default App
