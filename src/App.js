import Routes from './routes'
import withLogin from './Components/hoc/withLogin2'
import './App.css'

const App = withLogin(Routes, true)

export default App
