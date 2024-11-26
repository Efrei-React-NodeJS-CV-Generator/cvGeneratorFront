import{ ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
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
                        <div className="form-group">
                            <label htmlFor="login">Email :</label>
                            <Field className="form-control" type="email" name="email" />
                            {/* <ErrorMessage style={{ color: "red" }} name="email" component="div" /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="login">Mot de passe :</label>
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

export default LoginForm;