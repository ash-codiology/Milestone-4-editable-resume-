var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var jobTitleElement = document.getElementById("jobTitle");
    var companyNameElement = document.getElementById("companyName");
    var workDurationElement = document.getElementById("workDuration");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && jobTitleElement && companyNameElement && workDurationElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var job = jobTitleElement.value;
        var company = companyNameElement.value;
        var workDuration = workDurationElement.value;
        var skills = skillsElement.value;
        //creconstate resume output
        var resumeOutput = "\n    <h2> resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone number:</strong> ").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>job</h3>\n    <p>").concat(job, "</p>\n    \n    <h3>company</h3>\n    <p>").concat(company, "</p>\n    \n    <h3>workDuration</h3>\n    <p>").concat(workDuration, "</p>\n    \n    <h3>skills</h3>\n    <p>").concat(skills, "</p>          \n    \n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element is missing');
        }
    }
    else {
        console.error('one or more intput element are missing');
    }
});
