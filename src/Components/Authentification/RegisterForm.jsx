import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { getApiRoute } from '../../Utils/Route/ApiRoute';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useContext(UserContext);

  return (
    <>
      <Formik
        initialValues={{
          nom: "",
          prenom: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            const response = await fetch(getApiRoute(`auth/register`), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              const data = await response.json();
              register(data);
              navigate("/login", { replace: true });
            } else {
              // setFlashMessage("Nom de compte ou mot de passe incorrect.");
            }
          } catch (error) {
            // setFlashMessage("Erreur : " + error.message);
            console.error(error);
          }
        }}
        validationSchema={Yup.object({
          nom: Yup.string().required("Required"),
          prenom: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form className="gap-4">
            <div className="form-group">
              <label htmlFor="register">Nom :</label>
              <Field className="form-control" type="text" name="nom" />
              {/* <ErrorMessage style={{ color: "red" }} name="nom" component="div" /> */}
            </div>
            <div className="form-group">
              <label htmlFor="register">Prénom :</label>
              <Field className="form-control" type="text" name="prenom" />
              {/* <ErrorMessage style={{ color: "red" }} name="prenom" component="div" /> */}
            </div>
            <div className="form-group">
              <label htmlFor="register">Email :</label>
              <Field className="form-control" type="email" name="email" />
              {/* <ErrorMessage style={{ color: "red" }} name="email" component="div" /> */}
            </div>
            <div className="form-group">
              <label htmlFor="register">Mot de passe :</label>
              <Field className="form-control" type="password" name="password" />
              {/* <ErrorMessage style={{ color: "red" }} name="password" component="div" /> */}
            </div>
            <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
              Connexion
            </button>
          </Form>
        )}
      </Formik>
    </>
  )

}

export default RegisterForm;