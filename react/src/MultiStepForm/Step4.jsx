import React, { useContext } from "react";
import { Formik } from "formik";
import { Button, Input, DatePicker } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Step4 = () => {
  const { step4, setStep4, prev, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={step4}
      onSubmit={(values) => {
        setStep4(values);
        next();
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        // if (!values.SignatureOfEmployer)
        //   errors.SignatureOfEmployer =
        //     "Signature of Employer Official with Signatory Authority is required";
        // if (!values.PrintedNameAndTitleOfEmployer)
        //   errors.PrintedNameAndTitleOfEmployer =
        //     "Printed Name and Title of Employer Official with Signatory Authority is required";
        // if (!values.Date) errors.Date = "Date is required";
        // if (!values.PrintedNameOfEmployingOrganization)
        //   errors.PrintedNameOfEmployingOrganization =
        //     "Printed Name of Employing Organization is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => (
        <div className="details__wrapper">
          {/* Certification Text */}
          <div className="employer_certification__wrapper">
            <div className="certification__text">
              <p>
                I declare and affirm under penalty of perjury that the
                statements and information made herein are true and correct to
                the best of my knowledge, information, and belief. I understand
                that the law provides severe penalties for knowingly and
                willfully falsifying or concealing a material fact, or using any
                false document in the submission of this form.
              </p>
              <p>
                I certify on behalf of the employer that this Training Plan for
                STEM OPT Students (“Plan”) is approved and that:
              </p>
              <ol>
                <li>
                  I have reviewed and understand this Plan, and I will ensure
                  that the supervising Official follows this Plan;
                </li>
                <li>
                  I will notify the DSO at the earliest available opportunity
                  regarding any material changes to this Plan, including but not
                  limited to, any change of Employer Identification Number
                  resulting from a corporate restructuring, any reduction in
                  compensation from the amount previously submitted on the Plan
                  that is not tied to a reduction in hours worked, any
                  significant decrease in hours per week that a student engages
                  in a STEM training opportunity, and any decrease in hours
                  below the 20-hours-per-week minimum required under this rule;
                </li>
                <li>
                  Within five business days of the termination or departure of
                  the student during the authorized period of OPT, I will report
                  such termination or departure to the DSO (Note: business days
                  do not include federal holidays or weekend days; and an
                  employer shall consider a student to have departed when the
                  employer knows the student has left the practical training
                  opportunity, or when the student has not reported for
                  practical training for a period of five consecutive business
                  days without the consent of the employer);
                </li>
                <li>
                  I will adhere to all applicable regulatory provisions that
                  govern this program (see 8 CFR Part 214), which include, but
                  are not limited to, the following:
                  <ol type="a">
                    <li>
                      The student’s practical training opportunity is directly
                      related to the STEM degree that qualifies the student for
                      the STEM OPT extension, and the position offered to the
                      student achieves the objectives of his or her
                      participation in this training program;
                    </li>
                    <li>
                      The student will receive on-site supervision and training,
                      consistent with this Plan, by experienced and
                      knowledgeable staff;
                    </li>
                    <li>
                      The employer has sufficient resources and personnel to
                      provide the specified training program set forth in this
                      Plan, and the employer is prepared to implement that
                      program, including at the location(s) identified in this
                      Plan;
                    </li>
                    <li>
                      The student on a STEM OPT extension will not replace a
                      full- or part-time, temporary or permanent U.S. worker.
                      The terms and conditions of the STEM practical training
                      opportunity—including duties, hours, and compensation—are
                      commensurate with the terms and conditions applicable to
                      the employer’s similarly situated U.S. workers or, if the
                      employer does not employ and has not recently employed
                      more than two similarly situated U.S. workers in the area
                      of employment, the terms and conditions of other similarly
                      situated U.S. workers in the area of employment;
                    </li>
                    <li>
                      The training conducted pursuant to this Plan complies with
                      all applicable Federal and State requirements relating to
                      employment.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

          {/* Employer Certification */}
          <div className="form__item">
            <label>
              Signature of Employer Official with Signatory Authority:
            </label>
            <Input name="SignatureOfEmployer" />
            <p className="error__feedback">{errors.SignatureOfEmployer}</p>
          </div>
          <div className="form__item">
            <label>
              Printed Name and Title of Employer Official with Signatory
              Authority:
            </label>
            <Input name="PrintedNameAndTitleOfEmployer" />
            <p className="error__feedback">
              {errors.PrintedNameAndTitleOfEmployer}
            </p>
          </div>
          <div className="form__item">
            <label>Date (mm-dd-yyyy):</label>
            <DatePicker name="StartDateOfEmployment" />
          </div>
          <div className="form__item">
            <label>Printed Name of Employing Organization</label>
            <Input name="PrintedNameOfEmployingOrganization" />
            <p className="error__feedback">
              {errors.PrintedNameOfEmployingOrganization}
            </p>
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

export default Step4;
