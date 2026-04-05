
import './App.css'
import ControlledField from './components/ControlledField/ControlledField';
import FormAction from './components/FormAction/FormAction';
import SimpleForm from './components/SimpleForm/SimpleForm';

function App() {

  return (
    <>
      <div style={{marginTop: '50px'}}>
        <h1>Explore React Form</h1>
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        <ControlledField></ControlledField>
      </div>
    </>
  );
}

export default App
