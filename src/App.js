import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState('dark'); // Default to dark mode
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#042743'; // Set initial background to dark
    document.title = 'TextUtils - Dark Mode'; // Set initial title to dark mode
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000); // Hide alert after 2 seconds
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} setAlert={setAlert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
