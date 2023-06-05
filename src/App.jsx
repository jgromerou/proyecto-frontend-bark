import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import BarksContainer from './components/views/BarksContainer';
import SignUp from './components/views/SignUp';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        {/* <BarksContainer /> */}
        <SignUp />
      </Container>
    </>
  );
}

export default App;
