import './App.css'
import { Provider } from 'react-redux'
import storeManagerService from './store/store.service';
import { Application } from './components/Application/Application';

function App() {
  return (
    <Provider store={storeManagerService.getStore()}>
      <div className="App">
        <Application />
      </div>
    </Provider>
  )
}

export default App
