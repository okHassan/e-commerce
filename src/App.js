import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Pages from './Pages';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Pages />
            </div>
        </Provider>
    );
}

export default App;
