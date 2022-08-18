import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import { routes } from '@routes/routesConfig.js'

import Header from "@components/Header/Header"

const App = () => {
  return (
    <Router>
      <div className="main__container">
        <Header />
        <div className="main__page">
          <Routes>

            {routes.map(({ path, element }) => (
              <Route path={path} element={element}
                key={element} />
            ))}

          </Routes>
        </div>

      </div>

    </Router>
  )
}

export default App