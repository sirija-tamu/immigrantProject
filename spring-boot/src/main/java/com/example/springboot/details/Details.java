package com.example.springboot.details;

// import java.util.ArrayList;

// public class Details {

//     // Creating an object of ArrayList
//     static ArrayList<Details> Data
//         = new ArrayList<Details>();
//     int number;
//     String name;
//     Details(int number, String name)
//     {
//         // This keyword refers to parent instance itself
//         this.number = number;
//         this.name = name;
//     }
// }

public class Details {

    private String studentName;
    private String studentEmailAddress;
    private String nameOfSchoolRecommending;
    private String nameOfSchoolWhereSTEMDegreeEarned;
    private String sevis;
    private String dsoNameAndContactInformation;
    private String studentSevisIDNo;
    private String stemFrom;
    private String stemTo;
    private String cip;
    private String levelOfDegree;
    private String dateAwarded;
    private String basedOnPriorDegree;
    private String employmentAuthorizationNumber;
    private String signatureOfStudent;
    private String printedNameOfStudent;
    private String date;
    private String employerName;
    private String streetAddress;
    private String suite;
    private String employerWebsiteURL;
    private String city;
    private String state;
    private String zipCode;
    private String employerIDNumberEIN;
    private String numberOfFullTimeEmployeesUS;
    private String naicsCode;
    private String optHoursPerWeek;
    private String salaryAmountAndFrequency;
    private String startDateOfEmployment;
    private String otherCompensation1;
    private String otherCompensation2;
    private String otherCompensation3;
    private String otherCompensation4;
    private String signatureOfEmployer;
    private String printedNameAndTitleOfEmployer;
    private String printedNameOfEmployingOrganization;
    private String siteName;
    private String siteAddress;
    private String officialsName;
    private String officialsTitle;
    private String officialsEmail;
    private String officialsPhoneNumber;
    private String studentRole;
    private String goalsAndObjectives;
    private String employerOversight;
    private String measuresAndAssessments;

    public Details(String studentName, String studentEmailAddress, String nameOfSchoolRecommending, String nameOfSchoolWhereSTEMDegreeEarned, String sevis, String dsoNameAndContactInformation, String studentSEVISIDNo, String stemFrom, String stemTo, String cip, String levelOfDegree, String dateAwarded, String basedOnPriorDegree, String employmentAuthorizationNumber, String signatureOfStudent, String printedNameOfStudent, String date, String employerName, String streetAddress, String suite, String employerWebsiteURL, String city, String state, String zipCode, String employerIDNumberEIN, String numberOfFullTimeEmployeesUS, String naicsCode, String optHoursPerWeek, String salaryAmountAndFrequency, String startDateOfEmployment, String otherCompensation1, String otherCompensation2, String otherCompensation3, String otherCompensation4, String signatureOfEmployer, String printedNameAndTitleOfEmployer, String printedNameOfEmployingOrganization, String siteName, String siteAddress, String officialsName, String officialsTitle, String officialsEmail, String officialsPhoneNumber, String studentRole, String goalsAndObjectives, String employerOversight, String measuresAndAssessments) {
        this.studentName = studentName;
        this.studentEmailAddress = studentEmailAddress;
        this.nameOfSchoolRecommending = nameOfSchoolRecommending;
        this.nameOfSchoolWhereSTEMDegreeEarned = nameOfSchoolWhereSTEMDegreeEarned;
        this.sevis = sevis;
        this.dsoNameAndContactInformation = dsoNameAndContactInformation;
        this.studentSevisIDNo = studentSEVISIDNo;
        this.stemFrom = stemFrom;
        this.stemTo = stemTo;
        this.cip = cip;
        this.levelOfDegree = levelOfDegree;
        this.dateAwarded = dateAwarded;
        this.basedOnPriorDegree = basedOnPriorDegree;
        this.employmentAuthorizationNumber = employmentAuthorizationNumber;
        this.signatureOfStudent = signatureOfStudent;
        this.printedNameOfStudent = printedNameOfStudent;
        this.date = date;
        this.employerName = employerName;
        this.streetAddress = streetAddress;
        this.suite = suite;
        this.employerWebsiteURL = employerWebsiteURL;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.employerIDNumberEIN = employerIDNumberEIN;
        this.numberOfFullTimeEmployeesUS = numberOfFullTimeEmployeesUS;
        this.naicsCode = naicsCode;
        this.optHoursPerWeek = optHoursPerWeek;
        this.salaryAmountAndFrequency = salaryAmountAndFrequency;
        this.startDateOfEmployment = startDateOfEmployment;
        this.otherCompensation1 = otherCompensation1;
        this.otherCompensation2 = otherCompensation2;
        this.otherCompensation3 = otherCompensation3;
        this.otherCompensation4 = otherCompensation4;
        this.signatureOfEmployer = signatureOfEmployer;
        this.printedNameAndTitleOfEmployer = printedNameAndTitleOfEmployer;
        this.printedNameOfEmployingOrganization = printedNameOfEmployingOrganization;
        this.siteName = siteName;
        this.siteAddress = siteAddress;
        this.officialsName = officialsName;
        this.officialsTitle = officialsTitle;
        this.officialsEmail = officialsEmail;
        this.officialsPhoneNumber = officialsPhoneNumber;
        this.studentRole = studentRole;
        this.goalsAndObjectives = goalsAndObjectives;
        this.employerOversight = employerOversight;
        this.measuresAndAssessments = measuresAndAssessments;
    }

    public String generateInsertStatement() {
        String sql = "INSERT INTO details (";
        String columns = "";
        String values = "";

        // Generate column names and values
        columns += "student_name, student_email_address, name_of_school_recommending, name_of_school_where_stem_degree_earned, ";
        columns += "sevis, dso_name_and_contact_information, student_sevis_id_no, stem_from, stem_to, cip, ";
        columns += "level_of_degree, date_awarded, based_on_prior_degree, employment_authorization_number, signature_of_student, ";
        columns += "printed_name_of_student, date, employer_name, street_address, suite, employer_website_url, ";
        columns += "city, state, zip_code, employer_id_number_ein, number_of_full_time_employees_us, naics_code, ";
        columns += "opt_hours_per_week, salary_amount_and_frequency, start_date_of_employment, other_compensation_1, ";
        columns += "other_compensation_2, other_compensation_3, other_compensation_4, signature_of_employer, ";
        columns += "printed_name_and_title_of_employer, printed_name_of_employing_organization, site_name, ";
        columns += "site_address, officials_name, officials_title, officials_email, officials_phone_number, ";
        columns += "student_role, goals_and_objectives, employer_oversight, measures_and_assessments)";

        values += "'" + this.studentName + "', '" + this.studentEmailAddress + "', '" + this.nameOfSchoolRecommending + "', ";
        values += "'" + this.nameOfSchoolWhereSTEMDegreeEarned + "', '" + this.sevis + "', '" + this.dsoNameAndContactInformation + "', ";
        values += "'" + this.studentSevisIDNo + "', '" + this.stemFrom + "', '" + this.stemTo + "', '" + this.cip + "', ";
        values += "'" + this.levelOfDegree + "', '" + this.dateAwarded + "', '" + this.basedOnPriorDegree + "', ";
        values += "'" + this.employmentAuthorizationNumber + "', '" + this.signatureOfStudent + "', '" + this.printedNameOfStudent + "', ";
        values += "'" + this.date + "', '" + this.employerName + "', '" + this.streetAddress + "', '" + this.suite + "', ";
        values += "'" + this.employerWebsiteURL + "', '" + this.city + "', '" + this.state + "', '" + this.zipCode + "', ";
        values += "'" + this.employerIDNumberEIN + "', '" + this.numberOfFullTimeEmployeesUS + "', '" + this.naicsCode + "', ";
        values += "'" + this.optHoursPerWeek + "', '" + this.salaryAmountAndFrequency + "', '" + this.startDateOfEmployment + "', ";
        values += "'" + this.otherCompensation1 + "', '" + this.otherCompensation2 + "', '" + this.otherCompensation3 + "', ";
        values += "'" + this.otherCompensation4 + "', '" + this.signatureOfEmployer + "', '" + this.printedNameAndTitleOfEmployer + "', ";
        values += "'" + this.printedNameOfEmployingOrganization + "', '" + this.siteName + "', '" + this.siteAddress + "', ";
        values += "'" + this.officialsName + "', '" + this.officialsTitle + "', '" + this.officialsEmail + "', ";
        values += "'" + this.officialsPhoneNumber + "', '" + this.studentRole + "', '" + this.goalsAndObjectives + "', ";
        values += "'" + this.employerOversight + "', '" + this.measuresAndAssessments + "'";

        // Combine columns and values into the final SQL statement
        sql += columns + " VALUES (" + values + ")";

        return sql;
    }

    public String getStudentName() {
        return studentName;
    }
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
    public String getStudentEmailAddress() {
        return studentEmailAddress;
    }
    public void setStudentEmailAddress(String studentEmailAddress) {
        this.studentEmailAddress = studentEmailAddress;
    }
    public String getNameOfSchoolRecommending() {
        return nameOfSchoolRecommending;
    }
    public void setNameOfSchoolRecommending(String nameOfSchoolRecommending) {
        this.nameOfSchoolRecommending = nameOfSchoolRecommending;
    }
    public String getNameOfSchoolWhereSTEMDegreeEarned() {
        return nameOfSchoolWhereSTEMDegreeEarned;
    }
    public void setNameOfSchoolWhereSTEMDegreeEarned(String nameOfSchoolWhereSTEMDegreeEarned) {
        this.nameOfSchoolWhereSTEMDegreeEarned = nameOfSchoolWhereSTEMDegreeEarned;
    }
    public String getSevis() {
        return sevis;
    }
    public void setSevis(String sevis) {
        this.sevis = sevis;
    }
    public String getDsoNameAndContactInformation() {
        return dsoNameAndContactInformation;
    }
    public void setDsoNameAndContactInformation(String dsoNameAndContactInformation) {
        this.dsoNameAndContactInformation = dsoNameAndContactInformation;
    }
    public String getStudentSevisIDNo() {
        return studentSevisIDNo;
    }
    public void setStudentSevisIDNo(String studentSevisIDNo) {
        this.studentSevisIDNo = studentSevisIDNo;
    }
    public String getStemFrom() {
        return stemFrom;
    }
    public void setStemFrom(String stemFrom) {
        this.stemFrom = stemFrom;
    }
    public String getStemTo() {
        return stemTo;
    }
    public void setStemTo(String stemTo) {
        this.stemTo = stemTo;
    }
    public String getCip() {
        return cip;
    }
    public void setCip(String cip) {
        this.cip = cip;
    }
    public String getLevelOfDegree() {
        return levelOfDegree;
    }
    public void setLevelOfDegree(String levelOfDegree) {
        this.levelOfDegree = levelOfDegree;
    }
    public String getDateAwarded() {
        return dateAwarded;
    }
    public void setDateAwarded(String dateAwarded) {
        this.dateAwarded = dateAwarded;
    }
    public String getBasedOnPriorDegree() {
        return basedOnPriorDegree;
    }
    public void setBasedOnPriorDegree(String basedOnPriorDegree) {
        this.basedOnPriorDegree = basedOnPriorDegree;
    }
    public String getEmploymentAuthorizationNumber() {
        return employmentAuthorizationNumber;
    }
    public void setEmploymentAuthorizationNumber(String employmentAuthorizationNumber) {
        this.employmentAuthorizationNumber = employmentAuthorizationNumber;
    }
    public String getSignatureOfStudent() {
        return signatureOfStudent;
    }
    public void setSignatureOfStudent(String signatureOfStudent) {
        this.signatureOfStudent = signatureOfStudent;
    }
    public String getPrintedNameOfStudent() {
        return printedNameOfStudent;
    }
    public void setPrintedNameOfStudent(String printedNameOfStudent) {
        this.printedNameOfStudent = printedNameOfStudent;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getEmployerName() {
        return employerName;
    }
    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }
    public String getStreetAddress() {
        return streetAddress;
    }
    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }
    public String getSuite() {
        return suite;
    }
    public void setSuite(String suite) {
        this.suite = suite;
    }
    public String getEmployerWebsiteURL() {
        return employerWebsiteURL;
    }
    public void setEmployerWebsiteURL(String employerWebsiteURL) {
        this.employerWebsiteURL = employerWebsiteURL;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getZipCode() {
        return zipCode;
    }
    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
    public String getEmployerIDNumberEIN() {
        return employerIDNumberEIN;
    }
    public void setEmployerIDNumberEIN(String employerIDNumberEIN) {
        this.employerIDNumberEIN = employerIDNumberEIN;
    }
    public String getNumberOfFullTimeEmployeesUS() {
        return numberOfFullTimeEmployeesUS;
    }
    public void setNumberOfFullTimeEmployeesUS(String numberOfFullTimeEmployeesUS) {
        this.numberOfFullTimeEmployeesUS = numberOfFullTimeEmployeesUS;
    }
    public String getNaicsCode() {
        return naicsCode;
    }
    public void setNaicsCode(String naicsCode) {
        this.naicsCode = naicsCode;
    }
    public String getOptHoursPerWeek() {
        return optHoursPerWeek;
    }
    public void setOptHoursPerWeek(String optHoursPerWeek) {
        this.optHoursPerWeek = optHoursPerWeek;
    }
    public String getSalaryAmountAndFrequency() {
        return salaryAmountAndFrequency;
    }
    public void setSalaryAmountAndFrequency(String salaryAmountAndFrequency) {
        this.salaryAmountAndFrequency = salaryAmountAndFrequency;
    }
    public String getStartDateOfEmployment() {
        return startDateOfEmployment;
    }
    public void setStartDateOfEmployment(String startDateOfEmployment) {
        this.startDateOfEmployment = startDateOfEmployment;
    }
    public String getOtherCompensation1() {
        return otherCompensation1;
    }
    public void setOtherCompensation1(String otherCompensation1) {
        this.otherCompensation1 = otherCompensation1;
    }
    public String getOtherCompensation2() {
        return otherCompensation2;
    }
    public void setOtherCompensation2(String otherCompensation2) {
        this.otherCompensation2 = otherCompensation2;
    }
    public String getOtherCompensation3() {
        return otherCompensation3;
    }
    public void setOtherCompensation3(String otherCompensation3) {
        this.otherCompensation3 = otherCompensation3;
    }
    public String getOtherCompensation4() {
        return otherCompensation4;
    }
    public void setOtherCompensation4(String otherCompensation4) {
        this.otherCompensation4 = otherCompensation4;
    }
    public String getSignatureOfEmployer() {
        return signatureOfEmployer;
    }
    public void setSignatureOfEmployer(String signatureOfEmployer) {
        this.signatureOfEmployer = signatureOfEmployer;
    }
    public String getPrintedNameAndTitleOfEmployer() {
        return printedNameAndTitleOfEmployer;
    }
    public void setPrintedNameAndTitleOfEmployer(String printedNameAndTitleOfEmployer) {
        this.printedNameAndTitleOfEmployer = printedNameAndTitleOfEmployer;
    }
    public String getPrintedNameOfEmployingOrganization() {
        return printedNameOfEmployingOrganization;
    }
    public void setPrintedNameOfEmployingOrganization(String printedNameOfEmployingOrganization) {
        this.printedNameOfEmployingOrganization = printedNameOfEmployingOrganization;
    }
    public String getSiteName() {
        return siteName;
    }
    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }
    public String getSiteAddress() {
        return siteAddress;
    }
    public void setSiteAddress(String siteAddress) {
        this.siteAddress = siteAddress;
    }
    public String getOfficialsName() {
        return officialsName;
    }
    public void setOfficialsName(String officialsName) {
        this.officialsName = officialsName;
    }
    public String getOfficialsTitle() {
        return officialsTitle;
    }
    public void setOfficialsTitle(String officialsTitle) {
        this.officialsTitle = officialsTitle;
    }
    public String getOfficialsEmail() {
        return officialsEmail;
    }
    public void setOfficialsEmail(String officialsEmail) {
        this.officialsEmail = officialsEmail;
    }
    public String getOfficialsPhoneNumber() {
        return officialsPhoneNumber;
    }
    public void setOfficialsPhoneNumber(String officialsPhoneNumber) {
        this.officialsPhoneNumber = officialsPhoneNumber;
    }
    public String getStudentRole() {
        return studentRole;
    }
    public void setStudentRole(String studentRole) {
        this.studentRole = studentRole;
    }
    public String getGoalsAndObjectives() {
        return goalsAndObjectives;
    }
    public void setGoalsAndObjectives(String goalsAndObjectives) {
        this.goalsAndObjectives = goalsAndObjectives;
    }
    public String getEmployerOversight() {
        return employerOversight;
    }
    public void setEmployerOversight(String employerOversight) {
        this.employerOversight = employerOversight;
    }
    public String getMeasuresAndAssessments() {
        return measuresAndAssessments;
    }
    public void setMeasuresAndAssessments(String measuresAndAssessments) {
        this.measuresAndAssessments = measuresAndAssessments;
    }

    // Getters and setters for all fields
    // You can generate these automatically in your IDE or write them manually

}
