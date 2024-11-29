import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { getApiRoute } from "../../../Utils/Route/ApiRoute.js";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MyCvViewModeEnum from "../../../Enum/MyCvViewModeEnum.js";
import CvFormTitleField from "./Fields/CvFormTitleField.jsx";
import CvFormBiographyField from "./Fields/CvFormBiographyField.jsx";
import CvFormPhoneField from "./Fields/CvFormPhoneField.jsx";
import CvFormLinkedinField from "./Fields/CvFormLinkedinField.jsx";
import CvFormSkillsField from "./Fields/CvFormSkillsField.jsx";
import CvFormSoftSkillsField from "./Fields/CvFormSoftSkillsField.jsx";
import CvFormLanguagesField from "./Fields/CvFormLanguagesField.jsx";
import CvFormEducationField from "./Fields/CvFormEducationField.jsx";
import CvFormExperienceField from "./Fields/CvFormExperienceField.jsx";
import CvFormVisibilityFIeld from "./Fields/CvFormVisibilityFIeld.jsx";

function CvForm({ userToken, mode, cvData = null }) {
    const navigate = useNavigate();
    let endpoint;
    let requestMethod;

    if (cvData && mode === MyCvViewModeEnum.EDIT) {
        endpoint = getApiRoute(`cv/update/${cvData._id}`);
        requestMethod = "PATCH";
    } else if (mode === MyCvViewModeEnum.CREATE) {
        endpoint = getApiRoute(`cv/createCv`);
        requestMethod = "POST";
    }

    if (!endpoint || !requestMethod) {
        console.error("Endpoint or request method is undefined");
        return null;
    }

    console.log("Using endpoint:", endpoint);
    console.log("Request method:", requestMethod);

    return (
        <>
            <Formik
                initialValues={{
                    titre: cvData ? cvData.titre : "",
                    presentation: cvData ? cvData.presentation : "",
                    telephone: cvData ? cvData.telephone : "",
                    linkedin: cvData ? cvData.linkedin : "",
                    skills: cvData ? cvData.skills : [""],
                    softSkills: cvData ? cvData.softSkills : [""],
                    langage: cvData ? cvData.langage : [""],
                    education: cvData ? cvData.education : [{ school: "", formation: "", level: "", description: "", startDate: "", endDate: "" }],
                    experience: cvData ? cvData.experience : [{ compagny: "", position: "", startDate: "", endDate: "" }],
                    private: cvData ? cvData.private : false,
                }}
                onSubmit={async (values) => {
                    console.log("Form submitted with values:", values);
                    console.log("Request body:", JSON.stringify(values, null, 2));
                    try {
                        const response = await fetch(endpoint, {
                            method: requestMethod,
                            headers: {
                                Authorization: `Bearer ${userToken}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        });

                        console.log("Response received:", response);

                        if (response.ok) {
                            console.log("Submission successful, navigating to home");
                            navigate("/");
                        } else {
                            console.error("Submission failed with status:", response.status);
                        }
                    } catch (error) {
                        console.error("Error during submission:", error);
                    }
                }}
                validationSchema={Yup.object({
                    titre: Yup.string().required("Requis"),
                    presentation: Yup.string().required("Requis"),
                    telephone: Yup.string().required("Requis"),
                    linkedin: Yup.string()
                    .matches(
                        /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
                        "Le lien LinkedIn doit être une URL valide commençant par 'https://www.linkedin.com/'"
                    ),
                    skills: Yup.array().of(Yup.string().required("Requis")),
                    softSkills: Yup.array().of(Yup.string().required("Requis")),
                    langage: Yup.array().of(Yup.string().required("Requis")),
                    education: Yup.array().of(
                        Yup.object().shape({
                            school: Yup.string().required("Requis"),
                            formation: Yup.string().required("Requis"),
                            level: Yup.string().required("Requis"),
                            description: Yup.string(),
                            startDate: Yup.number().required("Requis"),
                            endDate: Yup.number().required("Requis"),
                        }),
                    ),
                    experience: Yup.array().of(
                        Yup.object().shape({
                            compagny: Yup.string().required("Requis"),
                            position: Yup.string().required("Requis"),
                            startDate: Yup.number().required("Requis"),
                            endDate: Yup.number().required("Requis"),
                        }),
                    ),
                    private: Yup.boolean(),
                })}
            >
                {({ isSubmitting, values }) => (
                    <Form>
                        <CvFormTitleField />
                        <CvFormBiographyField />
                        <CvFormPhoneField />
                        <CvFormLinkedinField />
                        <hr />
                        <CvFormSkillsField values={values} />
                        <hr />
                        <CvFormSoftSkillsField values={values} />
                        <hr />
                        <CvFormLanguagesField values={values} />
                        <hr />
                        <CvFormEducationField values={values} />
                        <hr />
                        <CvFormExperienceField values={values} />
                        <hr />
                        <CvFormVisibilityFIeld />

                        <button className="btn btn-primary mt-5" type="submit" disabled={isSubmitting}>
                            Enregistrer
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

CvForm.propTypes = {
    userToken: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(Object.values(MyCvViewModeEnum)).isRequired,
    cvData: PropTypes.object,
};

export default CvForm;
