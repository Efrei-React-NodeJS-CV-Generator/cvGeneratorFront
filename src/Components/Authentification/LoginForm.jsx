import{ ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { getApiRoute } from '../../Utils/Route/ApiRoute';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);



    return(
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={async (values) => {
                    try {
                        const response = await fetch(getApiRoute(`auth/login`), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        });

                        if (response.ok) {
                            const data = await response.json();
                            login(data);
                            navigate("/", { replace: true });
                        } else {
                            // setFlashMessage("Nom de compte ou mot de passe incorrect.");
                        }
                    } catch (error) {
                        // setFlashMessage("Erreur : " + error.message);
                        console.error(error);
                    }
                }}
                validationSchema={Yup.object({
                    email: Yup.string().required("Required"),
                    password: Yup.string().required("Required"),
                })}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor="login">Email :</label>
                            <Field className="form-control" type="email" name="email" placeholder="Email" required/>
                            {/* <ErrorMessage style={{ color: "red" }} name="email" component="div" /> */}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="login">Mot de passe :</label>
                            <Field className="form-control" type="password" name="password" placeholder="Mot de passe" required/>
                            {/* <ErrorMessage style={{ color: "red" }} name="password" component="div" /> */}
                        </div>
                        <div className=" d-flex flex-column gap-3 align-items-center text-center">
                            <Button variant="contained" type="submit" disabled={isSubmitting}>
                                Connexion
                            </Button>
                            <p className='mb-0'>
                                Pas de compte ? Pas de problème ! <Link to="/register">Inscrivez-vous maintenant !</Link>
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>
        
        
        </>
    )

}

export default LoginForm;