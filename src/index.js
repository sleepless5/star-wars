import ReactDOM from "react-dom/client";
import '@styles/index.css'
import App from './App'
import store from "./store/store";
import { Provider } from "react-redux";
import ThemeProvider from './context/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>

    </Provider>

  </>
)



