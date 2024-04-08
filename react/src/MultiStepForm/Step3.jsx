import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber, DatePicker } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Step3 = () => {
  const { step3, setStep3, prev, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={step3}
      onSubmit={(values) => {
        setStep3(values);
        next();
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        if (!values.EmployerName)
          errors.EmployerName = "Employer Name is required";
        if (!values.StreetAddress)
          errors.StreetAddress = "Street Address is required";
        if (!values.Suite) errors.Suite = "Suite is required";
        if (!values.EmployerWebsiteURL)
          errors.EmployerWebsiteURL = "Employer Website URL is required";
        if (!values.City) errors.City = "City is required";
        if (!values.State) errors.State = "State is required";
        if (!values.ZIPCode) errors.ZIPCode = "ZIP Code is required";
        if (!values.EmployerIDNumberEIN)
          errors.EmployerIDNumberEIN = "Employer ID Number (EIN) is required";
        if (!values.NumberOfFullTimeEmployeesUS)
          errors.NumberOfFullTimeEmployeesUS =
            "Number of Full-Time Employees in U.S. is required";
        if (!values.NAICSCode) errors.NAICSCode = "NAICS Code is required";
        if (!values.OPTHoursPerWeek)
          errors.OPTHoursPerWeek =
            "OPT Hours Per Week must be at least 20 hours/week";
        if (!values.SalaryAmountAndFrequency)
          errors.SalaryAmountAndFrequency =
            "Salary Amount and Frequency is required";
        if (!values.StartDateOfEmployment)
          errors.StartDateOfEmployment = "Start Date of Employment is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => (
        <div className="details__wrapper">
          <div className="form__item">
            <label>Employer Name *</label>
            <Input name="EmployerName" />
            <p className="error__feedback">{errors.EmployerName}</p>
          </div>
          <div className="form__item">
            <label>Street Address *</label>
            <Input name="StreetAddress" />
            <p className="error__feedback">{errors.StreetAddress}</p>
          </div>
          <div className="form__item">
            <label>Suite *</label>
            <Input name="Suite" />
            <p className="error__feedback">{errors.Suite}</p>
          </div>
          <div className="form__item">
            <label>Employer Website URL *</label>
            <Input name="EmployerWebsiteURL" />
            <p className="error__feedback">{errors.EmployerWebsiteURL}</p>
          </div>
          <div className="form__item">
            <label>City *</label>
            <Input name="City" />
            <p className="error__feedback">{errors.City}</p>
          </div>
          <div className="form__item">
            <label>State *</label>
            <Input name="State" />
            <p className="error__feedback">{errors.State}</p>
          </div>
          <div className="form__item">
            <label>ZIP Code *</label>
            <Input name="ZIPCode" />
            <p className="error__feedback">{errors.ZIPCode}</p>
          </div>
          <div className="form__item">
            <label>Employer ID Number (EIN) *</label>
            <Input name="EmployerIDNumberEIN" />
            <p className="error__feedback">{errors.EmployerIDNumberEIN}</p>
          </div>
          <div className="form__item">
            <label>Number of Full-Time Employees in U.S. *</label>
            <Input name="NumberOfFullTimeEmployeesUS" />
            <p className="error__feedback">
              {errors.NumberOfFullTimeEmployeesUS}
            </p>
          </div>
          <div className="form__item">
            <label>
              North American Industry Classification System (NAICS) Code *
            </label>
            <Input name="NAICSCode" />
            <p className="error__feedback">{errors.NAICSCode}</p>
          </div>
          <div className="form__item">
            <label>OPT Hours Per Week (must be at least 20 hours/week) *</label>
            <InputNumber name="OPTHoursPerWeek" min={20} />
            <p className="error__feedback">{errors.OPTHoursPerWeek}</p>
          </div>
          <div className="form__item">
            <label>Start Date of Employment (mm-dd-yyyy) *</label>
            <DatePicker name="StartDateOfEmployment" />
            <p className="error__feedback">{errors.StartDateOfEmployment}</p>
          </div>
          <div className="form__item">
            <label>Compensation: A. Salary Amount and Frequency *</label>
            <Input name="SalaryAmountAndFrequency" />
            <p className="error__feedback">{errors.SalaryAmountAndFrequency}</p>
          </div>
          <div className="form__item">
            <label>
              Compensation: B. Other Compensation (Type and Estimated Amount or
              Value)
            </label>
            <div className="other-compensation-container">
              <Input name="OtherCompensation1" placeholder="1." />
              <Input name="OtherCompensation2" placeholder="2." />
              <Input name="OtherCompensation3" placeholder="3." />
              <Input name="OtherCompensation4" placeholder="4." />
            </div>
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

export default Step3;
