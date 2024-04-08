import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, Checkbox, DatePicker } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Step2 = () => {
  const { step2, setStep2, prev, next } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={step2}
      onSubmit={(values) => {
        setStep2(values);
        next();
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        if (!values.SignatureOfStudent) errors.SignatureOfStudent = "Signature of Student is required";
        if (!values.PrintedNameOfStudent) errors.PrintedNameOfStudent = "Printed Name of Student is required";
        // if (!values.Date) errors.Date = "Date is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
          <div className={"student_certification__wrapper"}>
            <div className={"certification__text"}>
              <p>
                I declare and affirm under penalty of perjury that the statements and information made herein are true and correct to the best of my knowledge, information, and belief. I understand that the law provides severe penalties for knowingly and willfully falsifying or concealing a material fact, or using any false document in the submission of this form.
              </p>
              <p>
                I certify that:
              </p>
              <ol>
                <li>
                  I have reviewed, understand, and will adhere to this Training Plan for STEM OPT Students (“Plan”);
                </li>
                <li>
                  I will notify the DSO at the earliest available opportunity if I believe that my employer is not providing me with appropriate training as delineated on this Plan;
                </li>
                <li>
                  I understand that the Department of Homeland Security (DHS) may deny, revoke, or terminate the STEM OPT of students whom DHS determines are not engaging in OPT in compliance with the law, including the STEM OPT of students who are not, or whose employers are not, complying with this Plan;
                </li>
                <li>
                  My practical training opportunity is directly related to the STEM degree that qualifies me for the STEM OPT extension;
                </li>
                <li>
                  I will notify the DSO at the earliest available opportunity regarding any material changes to or deviations from this Plan, including but not limited to, any change of Employer Identification Number resulting from a corporate restructuring, any nontrivial reduction in compensation from the amount previously submitted on the Plan that is not tied to a reduction in hours worked, any significant decrease in hours per week that I engage in a STEM training opportunity, and any decrease in hours below the 20-hours-per-week minimum required under this rule.
                </li>
              </ol>
            </div>
          </div>
          <div className={`form__item ${errors.SignatureOfStudent && "input__error"}`}>
            <label>Signature of Student</label>
            <Input name={"SignatureOfStudent"} />
            <p className={"error__feedback"}>{errors.SignatureOfStudent}</p>
          </div>
          <div className={`form__item ${errors.PrintedNameOfStudent && "input__error"}`}>
            <label>Printed Name of Student</label>
            <Input name={"PrintedNameOfStudent"} />
            <p className={"error__feedback"}>{errors.PrintedNameOfStudent}</p>
          </div>
          <div className={`form__item ${errors.Date && "input__error"}`}>
            <label>Date (mm-dd-yyyy)</label>
            <DatePicker name="Date" />
            <p className={"error__feedback"}>{errors.Date}</p>
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
      )}}
    </Formik>
  );
};

export default Step2;
