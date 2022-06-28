import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
// import Regimen2 from '../img/Regimen.png';

const initialForm = {
   nombre: '',
   apellido: '',
   rol: '',
   direccion: '',
   ciudad: '',
   correo: '',
   celular: ''
}

const validationForm = (form) => {
   let errors = {}
   for (const property in form) {

      if (property !== "celular") {
         if (form[property] === '') {
            errors[property] = true;
         }
      }
   }
   errors.estado = true;
   return errors;
}

const Forms = () => {

   const [autorizar, setAutorizar] = useState(false);

   const {
      form,
      error,
      showErrors,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmit
   } = useForm(initialForm, validationForm);

   const redireccion = () => {
      setTimeout(() => {
         window.location.href = "https://www.colgate.com/es-co/oral-health-education/educational-resources/oral-health-tips-for-parents-infancy-to-age-2";
      }, 3000);
   }

   useEffect(() => {
      if (responseApi === true) {
         setAutorizar(false)
      }
   }, [responseApi])

   return (
      <div className="containerForm">
         <Container>
            <div className='Forms'>
               <Form className="mx-3" onSubmit={handleSubmit} id='formAsistencia'>
                  <Row>

                     <h5>Formulario de inscripción</h5>
                     <hr />

                     <span className="my-4">* Obligatorio</span>
                     <Col xs={12}>
                        <Form.Group className="mb-2" controlId="nombre">
                           <Form.Label><span>*</span> Nombres:</Form.Label>
                           <Form.Control name="nombre" type="text" placeholder="Nombre" onChange={handleChange} onBlur={handleBlur} isInvalid={error.nombre && showErrors ? true : false} />
                           <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="apellido">
                           <Form.Label><span>*</span> Apellidos:</Form.Label>
                           <Form.Control name="apellido" type="text" placeholder="Apellido" onChange={handleChange} onBlur={handleBlur} isInvalid={error.apellido && showErrors ? true : false} />
                           <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formIP_ULNacimiento">
                           <Form.Label><span>*</span> Parentesco:</Form.Label><br />
                           <Form.Check type="radio" name="rol" label="Docente" value="Docente" onChange={handleChange} onBlur={handleBlur} inline isInvalid={error.rol && showErrors ? true : false} />
                           <Form.Check type="radio" name="rol" label="Padre/Madre" value="Padre/Madre" onChange={handleChange} onBlur={handleBlur} inline isInvalid={error.rol && showErrors ? true : false} />
                           <Form.Check type="radio" name="rol" label="Otro" value="Otro" onChange={handleChange} onBlur={handleBlur} inline isInvalid={error.rol && showErrors ? true : false} />
                           {error.rol && showErrors && <div className='invalide'>Debes una opción</div>}
                        </Form.Group>
                        {form.rol === "Docente" ?
                           <Form.Group className="mb-2" controlId="direccion">
                              <Form.Label><span>*</span> Institución Educativa a la que pertenece:</Form.Label>
                              <Form.Control name="direccion" type="text" placeholder="Institución Educativa" onChange={handleChange} onBlur={handleBlur} isInvalid={error.direccion && showErrors ? true : false} />
                              <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                           </Form.Group>
                           :
                           <Form.Group className="mb-2" controlId="direccion">
                              <Form.Label><span>*</span> Dirección residencial:</Form.Label>
                              <Form.Control name="direccion" type="text" placeholder="Dirección residencial" onChange={handleChange} onBlur={handleBlur} isInvalid={error.direccion && showErrors ? true : false} />
                              <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                           </Form.Group>
                        }
                        <Form.Group className="mb-2" controlId="ciudad">
                           <Form.Label><span>*</span> Ciudad residencial:</Form.Label>
                           <Form.Control name="ciudad" type="text" placeholder="Ciudad" onChange={handleChange} onBlur={handleBlur} isInvalid={error.ciudad && showErrors ? true : false} />
                           <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="correo">
                           <Form.Label><span>*</span> Correo electrónico:</Form.Label>
                           <Form.Control name="correo" type="text" placeholder="name@example.com" onChange={handleChange} onBlur={handleBlur} isInvalid={error.correo && showErrors ? true : false} />
                           <Form.Control.Feedback type="invalid">Este campo es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="celular">
                           <Form.Label>Celular:</Form.Label>
                           <Form.Control name="celular" type="number" placeholder="Celular" onChange={handleChange} onBlur={handleBlur} isInvalid={error.celular && showErrors ? true : false} />
                           <Form.Control.Feedback type="invalid">Este campo es requerido y debe contener únicamente números</Form.Control.Feedback>
                        </Form.Group>
                     </Col>
                  </Row>

                  <Row>
                     <Col xs={12} className='habeas'>
                        <div>
                           <p className="habeasData">
                              El envío de dicho formulario con mis datos personales, autoriza a <b>COLGATE PALMOLIVE COMPAÑÍA NIT: 890.300.546-6</b> a realizar la recolección, uso y tratamiento de estos, y transferir los mismos con terceros, con el fin de participar en la actividad ya mencionada. Por lo tanto la empresa podrá contactarme por cualquier medio físico, electrónico, o telefónico. El tratamiento de mis datos se realizará de acuerdo a lo establecido en la Ley 1581 de 2012, el Decreto 1377 de 2013 y a la política de tratamiento de datos personales disponible en <a href="https://bit.ly/ColgatePalmolive_LegalPrivacyPolicy" target="_blank" rel="noopener noreferrer"><i><u>https://bit.ly/ColgatePalmolive_LegalPrivacyPolicy</u></i></a>. Conozco que tengo derecho a solicitar la supresión de estos en cualquier momento.
                           </p>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                           <Form.Check name="autorizar" type="checkbox" label="Si autorizo la recolección y uso de mis datos personales" onClick={() => setAutorizar(!autorizar)} />
                        </Form.Group>
                     </Col>

                     <Col xs={12} className="my-3 center">
                        <Button variant="primary" type="submit" className={autorizar ? "" : "noAutorizar"} disabled={!autorizar ? true : false}>
                           Enviar
                        </Button>
                     </Col>
                  </Row>

                  {loading &&
                     <div className="Overlay">
                        <Spinner animation="border" variant="info" />
                     </div>
                  }

                  {
                     responseApi === true ?
                        <div className='trueApi'>
                           <Alert variant='success'>
                              <b>¡Registro exitoso!</b>
                              <p>Espera un momento ...</p>
                              <Spinner animation="border" variant="info" />
                           </Alert>
                           {redireccion()}
                        </div>
                        :
                        responseApi === false ?
                           <Alert variant='danger'>
                              Hubo un error, por favor vuelve a intentarlo
                           </Alert>
                           : null
                  }
               </Form>
            </div>
         </Container >
      </div >
   );
};

export default Forms;