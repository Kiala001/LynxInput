import './App.css';
import '@lynx-js/web-core';
import '@lynx-js/web-elements/index.css';
import '@lynx-js/web-elements/all';


const App = () => {
  return (
    <lynx-view
      style={{ width: '100vw', height: '100vh' }}
      url="/main.web.bundle"
    />
  );
};

export default App;
