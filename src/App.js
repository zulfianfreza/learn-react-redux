import Navbar from './components/Navbar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import { store } from './config';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Content />
    </Provider>
  );
}

export default App;
