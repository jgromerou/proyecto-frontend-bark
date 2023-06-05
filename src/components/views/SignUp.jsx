import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

const SignUp = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (datos) => {
    const { email, nombre, password, repetirPassword } = datos;
    const datosNuevos = { email, nombre, password };

    try {
      const resp = await fetch('http://localhost:3004/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosNuevos),
      });
      const result = await resp.json();

      setEmail('');
      setNombre('');
      setPassword('');
      setRepetirPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="container-wrapper">
        <Card.Body>
          <Card.Title className="mt-2 mb-4 text-uppercase  fw-bold text-center">
            Únite hoy mismo a Bark
          </Card.Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4" controlId="emailUsuario">
              <Form.Label className="fw-bold">Email:</Form.Label>
              <Form.Control
                aria-label="Ingrese un email:"
                {...register('email', {
                  required: 'Debe ingresar un email',
                })}
                type="text"
                placeholder="Ingrese un email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <Alert variant="danger" className="py-2 my-2">
                  Por favor ingrese un Email...
                </Alert>
              )}
            </Form.Group>

            <Form.Group className="mb-4" controlId="nombreUsuario">
              <Form.Label className="fw-bold">Nombre:</Form.Label>
              <Form.Control
                aria-label="Ingrese un nombre:"
                {...register('nombre', {
                  required: 'Debe ingresar un nombre',
                })}
                type="text"
                placeholder="Ingrese un nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {errors.nombre && (
                <Alert variant="danger" className="py-2 my-2">
                  Por favor ingrese un nombre...
                </Alert>
              )}
            </Form.Group>

            <Form.Group className="mb-4" controlId="passwordUsuario">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                aria-label="Ingrese un password:"
                {...register('password', {
                  required: 'Debe ingresar un password',
                })}
                type="text"
                placeholder="Ingrese un password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <Alert variant="danger" className="py-2 my-2">
                  Por favor ingrese un Password...
                </Alert>
              )}
            </Form.Group>

            <Form.Group className="mb-4" controlId="repetirPasswordUsuario">
              <Form.Label className="fw-bold">Repetir Password:</Form.Label>
              <Form.Control
                aria-label="Ingrese el password nuevamente:"
                {...register('repetirPassword', {
                  required: 'Debe ingresar el password nuevamente',
                })}
                type="text"
                placeholder="Ingrese el password nuevamente"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
              {errors.repetirPassword && (
                <Alert variant="danger" className="py-2 my-2">
                  Por favor ingrese el password nuevamente
                </Alert>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {/*TODO: Hacer los botones de login y el de olvide-password*/}
    </>
  );
};

export default SignUp;
