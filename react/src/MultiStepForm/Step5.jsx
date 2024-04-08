import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, Input, DatePicker } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Step5 = () => {
  const { step5, setStep5, prev, next } = useContext(MultiStepFormContext);

  const validateOnNext = (values) => {
    const errors = {};
    // if (!values.StudentName) errors.StudentName = "Student Name is required";
    // if (!values.EmployerName) errors.EmployerName = "Employer Name is required";
    // if (!values.SiteName) errors.SiteName = "Site Name is required";
    // if (!values.SiteAddress) errors.SiteAddress = "Site Address is required";
    // if (!values.OfficialsName) errors.OfficialsName = "Official's Name is required";
    // if (!values.OfficialsTitle) errors.OfficialsTitle = "Official's Title is required";
    // if (!values.OfficialsEmail) errors.OfficialsEmail = "Official's Email is required";
    // if (!values.OfficialsPhoneNumber) errors.OfficialsPhoneNumber = "Official's Phone Number is required";
    // if (!values.StudentRole) errors.StudentRole = "Student Role is required";
    // if (!values.GoalsAndObjectives) errors.GoalsAndObjectives = "Goals and Objectives are required";
    // if (!values.EmployerOversight) errors.EmployerOversight = "Employer Oversight is required";
    // if (!values.MeasuresAndAssessments) errors.MeasuresAndAssessments = "Measures and Assessments are required";
    return errors;
  };

  return (
    <Formik
      initialValues={step5}
      onSubmit={(values) => {
        setStep5(values);
        next();
      }}
      validateOnChange={false}
      validate={validateOnNext}
    >
      {({ handleSubmit, errors }) => (
        <div className="details__wrapper">
          <div className="form__item">
            <label>Student Name (Surname/Primary Name, Given Name):</label>
            <Input name="StudentName" />
            <p className="error__feedback">{errors.StudentName}</p>
          </div>
          <div className="form__item">
            <label>Employer Name:</label>
            <Input name="EmployerName" />
            <p className="error__feedback">{errors.EmployerName}</p>
          </div>
          {/* EMPLOYER SITE INFORMATION */}
          <div className="form__item">
            <label>Site Name:</label>
            <Input name="SiteName" />
            <p className="error__feedback">{errors.SiteName}</p>
          </div>
          <div className="form__item">
            <label>Site Address (Street, City, State, ZIP):</label>
            <Input name="SiteAddress" />
            <p className="error__feedback">{errors.SiteAddress}</p>
          </div>
          <div className="form__item">
            <label>Name of Official:</label>
            <Input name="OfficialsName" />
            <p className="error__feedback">{errors.OfficialsName}</p>
          </div>
          <div className="form__item">
            <label>Official's Title:</label>
            <Input name="OfficialsTitle" />
            <p className="error__feedback">{errors.OfficialsTitle}</p>
          </div>
          <div className="form__item">
            <label>Official's Email:</label>
            <Input name="OfficialsEmail" />
            <p className="error__feedback">{errors.OfficialsEmail}</p>
          </div>
          <div className="form__item">
            <label>Official's Phone Number:</label>
            <Input name="OfficialsPhoneNumber" />
            <p className="error__feedback">{errors.OfficialsPhoneNumber}</p>
          </div>
          {/* STUDENT ROLE */}
          <div className="form__item">
            <label>Student Role:</label>
            <Input name="StudentRole" />
            <p className="error__feedback">{errors.StudentRole}</p>
          </div>
          {/* GOALS AND OBJECTIVES */}
          <div className="form__item">
            <label>Goals and Objectives:</label>
            <Input.TextArea name="GoalsAndObjectives" />
            <p className="error__feedback">{errors.GoalsAndObjectives}</p>
          </div>
          {/* EMPLOYER OVERSIGHT */}
          <div className="form__item">
            <label>Employer Oversight:</label>
            <Input.TextArea name="EmployerOversight" />
            <p className="error__feedback">{errors.EmployerOversight}</p>
          </div>
          {/* MEASURES AND ASSESSMENTS */}
          <div className="form__item">
            <label>Measures and Assessments:</label>
            <Input.TextArea name="MeasuresAndAssessments" />
            <p className={"error__feedback"}>{errors.MeasuresAndAssessments}</p>
          </div>
          <div
            className={"form__item button__items d-flex justify-content-end"}
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={handleSubmit}>
              Next
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Step5;
