import Routes from './routes'
import withLogin from './Components/hoc/withLogin'
import './App.css'

const App = withLogin(Routes, true)

export default App
