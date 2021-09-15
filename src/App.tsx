import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '@/pages/Home'
import GoodPage from '@/pages/Good'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/good" component={GoodPage}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
