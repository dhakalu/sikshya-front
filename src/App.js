import Routes from './routes'
import withLogin from './Components/hoc/withLogin'
const App = withLogin(Routes, true)

export default App
