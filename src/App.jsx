import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import BarksContainer from './components/views/BarksContainer';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <BarksContainer />
      </Container>
    </>
  );
}

export default App;
