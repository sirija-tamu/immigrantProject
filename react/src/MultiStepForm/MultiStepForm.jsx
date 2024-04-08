import React, { useState } from "react";
import { Steps, message } from "antd";
import { Provider } from "./MultiStepFormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Review from "./Review";
import axios from "axios";

const { Step } = Steps;

const step1InitialState = {
  StudentName: "",
  StudentEmailAddress: "",
  NameOfSchoolRecommending: "",
  NameOfSchoolWhereSTEMDegreeEarned: "",
  SEVIS: "",
  DSONameAndContactInformation: "",
  StudentSEVISIDNo: "",
  STEMFrom: "",
  STEMTo: "",
  CIP: "",
  LevelOfDegree: "",
  DateAwarded: "",
  BasedOnPriorDegree: "",
  EmploymentAuthorizationNumber: "",
};

const step2InitialState = {
  SignatureOfStudent: "",
  PrintedNameOfStudent: "",
  Date: "",
};

const step3InitialState = {
  EmployerName: "",
  StreetAddress: "",
  Suite: "",
  EmployerWebsiteURL: "",
  City: "",
  State: "",
  ZIPCode: "",
  EmployerIDNumberEIN: "",
  NumberOfFullTimeEmployeesUS: "",
  NAICSCode: "",
  OPTHoursPerWeek: "",
  SalaryAmountAndFrequency: "",
  StartDateOfEmployment: "",
  OtherCompensation1: "",
  OtherCompensation2: "",
  OtherCompensation3: "",
  OtherCompensation4: "",
};

const step4InitialState = {
  SignatureOfEmployer: "",
  PrintedNameAndTitleOfEmployer: "",
  Date: "",
  PrintedNameOfEmployingOrganization: "",
};

const step5InitialState = {
  StudentName: "",
  EmployerName: "",
  SiteName: "",
  SiteAddress: "",
  OfficialsName: "",
  OfficialsTitle: "",
  OfficialsEmail: "",
  OfficialsPhoneNumber: "",
  StudentRole: "",
  GoalsAndObjectives: "",
  EmployerOversight: "",
  MeasuresAndAssessments: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    case 4:
      return <Step5 />;
    case 5:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [] = useState();
  const [step1, setStep1] = useState(step1InitialState);
  const [step2, setStep2] = useState(step2InitialState);
  const [step3, setStep3] = useState(step3InitialState);
  const [step4, setStep4] = useState(step4InitialState);
  const [step5, setStep5] = useState(step5InitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    console.log(currentStep);
    if (currentStep === 5) {
      const apiUrl = "http://localhost:8080/EnterDetails";
      const formData = {
        studentName: step1["StudentName"],
        studentEmailAddress: step1["StudentEmailAddress"],
        nameOfSchoolRecommending: step1["NameOfSchoolRecommending"],
        nameOfSchoolWhereSTEMDegreeEarned:
          step1["NameOfSchoolWhereSTEMDegreeEarned"],
        sevis: step1["SEVIS"],
        dsoNameAndContactInformation: step1["DSONameAndContactInformation"],
        studentSevisIDNo: step1["StudentSEVISIDNo"],
        stemFrom: step1["STEMFrom"],
        stemTo: step1["STEMTo"],
        cip: step1["CIP"],
        levelOfDegree: step1["LevelOfDegree"],
        dateAwarded: step1["DateAwarded"],
        basedOnPriorDegree: step1["BasedOnPriorDegree"],
        employmentAuthorizationNumber: step1["EmploymentAuthorizationNumber"],
        signatureOfStudent: step2["SignatureOfStudent"],
        printedNameOfStudent: step2["PrintedNameOfStudent"],
        date: step2["Date"],
        employerName: step3["EmployerName"],
        streetAddress: step3["StreetAddress"],
        suite: step3["Suite"],
        employerWebsiteURL: step3["EmployerWebsiteURL"],
        city: step3["City"],
        state: step3["State"],
        zipCode: step3["ZIPCode"],
        employerIDNumberEIN: step3["EmployerIDNumberEIN"],
        numberOfFullTimeEmployeesUS: step3["NumberOfFullTimeEmployeesUS"],
        naicsCode: step3["NAICSCode"],
        optHoursPerWeek: step3["OPTHoursPerWeek"],
        salaryAmountAndFrequency: step3["SalaryAmountAndFrequency"],
        startDateOfEmployment: step3["StartDateOfEmployment"],
        otherCompensation1: step3["OtherCompensation1"],
        otherCompensation2: step3["OtherCompensation2"],
        otherCompensation3: step3["OtherCompensation3"],
        otherCompensation4: step3["OtherCompensation4"],
        signatureOfEmployer: step4["SignatureOfEmployer"],
        printedNameAndTitleOfEmployer: step4["PrintedNameAndTitleOfEmployer"],
        printedNameOfEmployingOrganization:
          step4["PrintedNameOfEmployingOrganization"],
        siteName: step5["SiteName"],
        siteAddress: step5["SiteAddress"],
        officialsName: step5["OfficialsName"],
        officialsTitle: step5["OfficialsTitle"],
        officialsEmail: step5["OfficialsEmail"],
        officialsPhoneNumber: step5["OfficialsPhoneNumber"],
        studentRole: step5["StudentRole"],
        goalsAndObjectives: step5["GoalsAndObjectives"],
        employerOversight: step5["EmployerOversight"],
        measuresAndAssessments: step5["MeasuresAndAssessments"],
      };

      axios
        .post(apiUrl, formData)
        .then((response) => {
          console.log("Response:", response.data);
          message.success("Form submitted successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
          message.error("Form submission failed, reach out to the team");
        });
      setCurrentStep(0);
      setStep1(step1InitialState);
      setStep2(step2InitialState);
      setStep3(step3InitialState);
      setStep4(step4InitialState);
      setStep5(step5InitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider
      value={{
        step1,
        setStep1,
        step2,
        setStep2,
        step3,
        setStep3,
        step4,
        setStep4,
        step5,
        setStep5,
        next,
        prev,
      }}
    >
      <Steps current={currentStep}>
        <Step title={"SECTION 1"} />
        <Step title={"SECTION 2"} />
        <Step title={"SECTION 3"} />
        <Step title={"SECTION 4"} />
        <Step title={"SECTION 5"} />
        <Step title={"REVIEW"} />
        {/* <Step title={"STUDENT INFORMATION"} />
        <Step title={"STUDENT CERTIFICATION"} />
        <Step title={"EMPLOYER INFORMATION"} />
        <Step title={"EMPLOYER CERTIFICATION"} />
        <Step title={"TRAINING PLAN FOR STEM OPT STUDENTS"} /> */}
      </Steps>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default MultiStepForm;
