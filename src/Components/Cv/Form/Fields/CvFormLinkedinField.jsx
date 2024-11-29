import { ErrorMessage, Field } from "formik";

function CvFormLinkedinField() {
    return (
        <div className="form-group">
            <label htmlFor="linkedin">LinkedIn :</label>
            <Field
                className="form-control"
                type="text"
                name="linkedin"
                placeholder="https://www.linkedin.com/in/votre-profil"
            />
            <ErrorMessage 
                name="linkedin" 
                component="div" 
                style={{ color: "red" }}
            />
        </div>
    );
}

export default CvFormLinkedinField;
