import { ErrorMessage, Field } from "formik";

function CvFormBiographyField() {
    return (
        <div className="form-group">
            <label htmlFor="biography">Biographie :</label>
            <Field className="form-control" type="text" name="presentation" />
            <ErrorMessage style={{ color: "red" }} name="presentation" component="div" />
        </div>
    );
}

export default CvFormBiographyField;
