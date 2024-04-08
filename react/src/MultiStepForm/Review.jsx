import React, { useContext } from "react";
import { Button } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { step1, step2, step3, step4, step5, prev, next } = useContext(MultiStepFormContext);

  const handleSubmit = () => {
    // Handle form submission logic here
    // For example, you can submit the data to a server or navigate to the next step
    next(); // Navigate to the next step
  };

  // Descriptions for each step's keys
  const stepDescriptions = {
    StudentName: "Student Name",
    StudentEmailAddress: "Student Email Address",
    NameOfSchoolRecommending: "Name of School Recommending STEM OTP",
    NameOfSchoolWhereSTEMDegreeEarned: "Name of School where STEM Degree Earned",
    SEVIS: "SEVIS",
    DSONameAndContactInformation: "Designated School Official (DSO) Name and Contact Information",
    StudentSEVISIDNo: "Student SEVIS ID No.",
    STEMFrom: "STEM OPT Requested Period (mm-dd-yyyy) From",
    STEMTo: "STEM OPT Requested Period (mm-dd-yyyy) To",
    CIP: "Qualifying Major and Classification of Instructional Programs (CIP) Code",
    LevelOfDegree: "Level/Type of Qualifying Degree",
    DateAwarded: "Date Awarded",
    BasedOnPriorDegree: "Based on Prior Degree",
    EmploymentAuthorizationNumber: "Employment Authorization Number",
    SignatureOfStudent: "Signature of Student",
    PrintedNameOfStudent: "Printed Name of Student",
    Date: "Date (mm-dd-yyyy)",
    EmployerName: "Employer Name",
    StreetAddress: "Street Address",
    Suite: "Suite",
    EmployerWebsiteURL: "Employer Website URL",
    City: "City",
    State: "State",
    ZIPCode: "ZIP Code",
    EmployerIDNumberEIN: "Employer ID Number (EIN)",
    NumberOfFullTimeEmployeesUS: "Number of Full-Time Employees in U.S.",
    NAICSCode: "North American Industry Classification System (NAICS) Code",
    OPTHoursPerWeek: "OPT Hours Per Week (must be at least 20 hours/week)",
    StartDateOfEmployment: "Start Date of Employment (mm-dd-yyyy)",
    SalaryAmountAndFrequency: "Compensation: A. Salary Amount and Frequency",
    OtherCompensation1: "Compensation: B. Other Compensation (Type and Estimated Amount or Value) - 1",
    OtherCompensation2: "Compensation: B. Other Compensation (Type and Estimated Amount or Value) - 2",
    OtherCompensation3: "Compensation: B. Other Compensation (Type and Estimated Amount or Value) - 3",
    OtherCompensation4: "Compensation: B. Other Compensation (Type and Estimated Amount or Value) - 4",
    SignatureOfEmployer: "Signature of Employer Official with Signatory Authority",
    PrintedNameAndTitleOfEmployer: "Printed Name and Title of Employer Official with Signatory Authority",
    Date: "Date (mm-dd-yyyy)",
    PrintedNameOfEmployingOrganization: "Printed Name of Employing Organization",
    StudentName: "Student Name (Surname/Primary Name, Given Name)",
    EmployerName: "Employer Name",
    SiteName: "Site Name",
    SiteAddress: "Site Address (Street, City, State, ZIP)",
    OfficialsName: "Name of Official",
    OfficialsTitle: "Official's Title",
    OfficialsEmail: "Official's Email",
    OfficialsPhoneNumber: "Official's Phone Number",
    StudentRole: "Student Role",
    GoalsAndObjectives: "Goals and Objectives",
    EmployerOversight: "Employer Oversight",
    MeasuresAndAssessments: "Measures and Assessments"
  };

  const renderStep = (step, title) => (
    <div className="review__step">
      <h3>{title}</h3>
      <ul>
        {Object.entries(step).map(([key, value]) => (
          <li key={key}>
            <strong>{getDescription(key, step)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );

  const getDescription = (key, stepTitle) => {
    return stepDescriptions[key] ? stepDescriptions[key] : key;
  };

  return (
    <div className="review__wrapper">
      <h2>Review Your Information</h2>
      {renderStep(step1, "Step 1: Student Information")}
      {renderStep(step2, "Step 2: Student Certification")}
      {renderStep(step3, "Step 3: Employer Information")}
      {renderStep(step4, "Step 4: Employer Certification")}
      {renderStep(step5, "Step 5: Training Plan")}
      <div className="button__items d-flex justify-content-between">
        <Button type="default" onClick={prev}>Back</Button>
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Review;
