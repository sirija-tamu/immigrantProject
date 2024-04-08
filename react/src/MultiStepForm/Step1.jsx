import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, DatePicker } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Step1 = () => {
  const { step1, setStep1, next} = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={step1}
      onSubmit={(values) => {
        setStep1(values);
        next();
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        if (!values.StudentName) errors.StudentName = "Student Name is required";
        if (!values.StudentEmailAddress) errors.StudentEmailAddress = "Student Email Address is required";
        if (!values.NameOfSchoolRecommending) errors.NameOfSchoolRecommending = "Name of School recommending STEM OTP is required";
        if (!values.NameOfSchoolWhereSTEMDegreeEarned) errors.NameOfSchoolWhereSTEMDegreeEarned = "Name of School where STEM Degree Earned is required";
        if (!values.SEVIS) errors.SEVIS = "SEVIS School Code of School Recommending STEM OPT (including 3-digit) suffix is required";
        if (!values.DSONameAndContactInformation) errors.DSONameAndContactInformation = "Designated School Official (DSO) Name and Contact Information is required";
        if (!values.StudentSEVISIDNo) errors.StudentSEVISIDNo = "Student SEVIS ID No. is required";
        // if (!values.STEMFrom) errors.STEMFrom = "STEM OPT Requested Period (mm-dd-yyyy) From is required";
        // if (!values.STEMTo) errors.STEMTo = "STEM OPT Requested Period (mm-dd-yyyy) To is required";
        if (!values.CIP) errors.CIP = "Qualifying Major and Classification of Instructional Programs (CIP) Code is required";
        if (!values.LevelOfDegree) errors.LevelOfDegree = "Level/Type of Qualifying Degree is required";
        // if (!values.DateAwarded) errors.DateAwarded = "Date Awarded is required";
        if (!values.BasedOnPriorDegree) errors.BasedOnPriorDegree = "Based on Prior Degree is required";
        if (!values.EmploymentAuthorizationNumber) errors.EmploymentAuthorizationNumber = "Employment Authorization Number is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.StudentName && "input__error"}`}>
              <label>Student Name *</label>
              <Input name={"StudentName"} />
              <p className={"error__feedback"}>{errors.StudentName}</p>
            </div>
            <div className={`form__item ${errors.StudentEmailAddress && "input__error"}`}>
              <label>Student Email Address *</label>
              <Input name={"StudentEmailAddress"} />
              <p className={"error__feedback"}>{errors.StudentEmailAddress}</p>
            </div>
            <div className={`form__item ${errors.NameOfSchoolRecommending && "input__error"}`}>
              <label>Name of School Recommending STEM OTP *</label>
              <Input name={"NameOfSchoolRecommending"} />
              <p className={"error__feedback"}>{errors.NameOfSchoolRecommending}</p>
            </div>
            <div className={`form__item ${errors.NameOfSchoolWhereSTEMDegreeEarned && "input__error"}`}>
              <label>Name of School where STEM Degree Earned *</label>
              <Input name={"NameOfSchoolWhereSTEMDegreeEarned"} />
              <p className={"error__feedback"}>{errors.NameOfSchoolWhereSTEMDegreeEarned}</p>
            </div>
            <div className={`form__item ${errors.SEVIS && "input__error"}`}>
              <label>SEVIS *</label>
              <Input name={"SEVIS"} />
              <p className={"error__feedback"}>{errors.SEVIS}</p>
            </div>
            <div className={`form__item ${errors.DSONameAndContactInformation && "input__error"}`}>
              <label>Designated School Official (DSO) Name and Contact Information *</label>
              <Input name={"DSONameAndContactInformation"} />
              <p className={"error__feedback"}>{errors.DSONameAndContactInformation}</p>
            </div>
            <div className={`form__item ${errors.StudentSEVISIDNo && "input__error"}`}>
              <label>Student SEVIS ID No. *</label>
              <Input name={"StudentSEVISIDNo"} />
              <p className={"error__feedback"}>{errors.StudentSEVISIDNo}</p>
            </div>
            <div className={`form__item ${errors.STEMFrom && "input__error"}`}>
              <label>STEM OPT Requested Period (mm-dd-yyyy) From *</label>
              <DatePicker name="STEMFrom" />
              <p className={"error__feedback"}>{errors.STEMFrom}</p>
            </div>
            <div className={`form__item ${errors.STEMTo && "input__error"}`}>
              <label>STEM OPT Requested Period (mm-dd-yyyy) To *</label>
              <DatePicker name="STEMTo" />
              <p className={"error__feedback"}>{errors.STEMTo}</p>
            </div>
            <div className={`form__item ${errors.CIP && "input__error"}`}>
              <label>Qualifying Major and Classification of Instructional Programs (CIP) Code *</label>
              <Input name={"CIP"} />
              <p className={"error__feedback"}>{errors.CIP}</p>
            </div>
            <div className={`form__item ${errors.LevelOfDegree && "input__error"}`}>
              <label>Level/Type of Qualifying Degree *</label>
              <Input name={"LevelOfDegree"} />
              <p className={"error__feedback"}>{errors.LevelOfDegree}</p>
            </div>
            <div className={`form__item ${errors.DateAwarded && "input__error"}`}>
              <label>Date Awarded *</label>
              <DatePicker name="DateAwarded" />
              <p className={"error__feedback"}>{errors.DateAwarded}</p>
            </div>
            <div className={`form__item ${errors.BasedOnPriorDegree && "input__error"}`}>
              <label>Based on Prior Degree *</label>
              <Input name={"BasedOnPriorDegree"} />
              <p className={"error__feedback"}>{errors.BasedOnPriorDegree}</p>
            </div>
            <div className={`form__item ${errors.EmploymentAuthorizationNumber && "input__error"}`}>
              <label>Employment Authorization Number *</label>
              <Input name={"EmploymentAuthorizationNumber"} />
              <p className={"error__feedback"}>{errors.EmploymentAuthorizationNumber}</p>
            </div>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Step1;
