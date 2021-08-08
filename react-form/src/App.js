import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent'
import ControledForm from './components/ControledForm'
import FunctionalForm from './components/FunctionalForm'

function App() {
  return (
    <div className="App">
      <h3>Render Form Component</h3>
      <FormComponent />
      <ControledForm />
      <FunctionalForm />
    </div>
  );
}

export default App;
