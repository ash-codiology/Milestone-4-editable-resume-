//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    
    
    //type assertion
    let nameElement = document.getElementById("name") as HTMLInputElement;
    let emailElement = document.getElementById("email") as HTMLInputElement;
    let phoneElement = document.getElementById("phone") as HTMLInputElement;
    
    let educationElement = document.getElementById("education") as HTMLInputElement;
    
    let jobTitleElement = document.getElementById("jobTitle") as HTMLInputElement;
    let companyNameElement = document.getElementById("companyName") as HTMLInputElement;
    let workDurationElement = document.getElementById("workDuration") as HTMLInputElement;
    
    let skillsElement = document.getElementById("skills") as HTMLInputElement;
    
    if (nameElement && emailElement && phoneElement && educationElement &&jobTitleElement && companyNameElement && workDurationElement && skillsElement ){
    
    let name = nameElement.value
    let email = emailElement.value
    let phone = phoneElement.value
    let education = educationElement.value
    let job = jobTitleElement.value
    let company = companyNameElement.value
    let workDuration = workDurationElement.value
    let skills = skillsElement.value
    
    
    //creconstate resume output
    let resumeOutput= `
    <h2> resume</h2>
    <p><strong>Name:</strong><span id="edit-name" class="editable" ${name} </span></p>
    <p><strong>Email:</strong><span id="email" class="editable"${email} </span></p>
    <p><strong>Phone number:</strong><span id="edit-phone" class="editable" ${phone} </span></p>
    
    <h3>Education</h3>
    <p id="education" class="editable">${education}</p>
    
    <h3>job</h3>
    <p id="job" class="editable">${job}</p>
    
    <h3>company</h3>
    <p id="company" class="editable">${company}</p>
    
    <h3>workDuration</h3>
    <p id="workDuration" class="editable">${workDuration}</p>
    
    <h3>skills</h3>
    <p id="skills" class="editable">${skills}</p>          
    
    `;



    let resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
        makeEditable();
    } 
    }else{
        console.error('one or more intput element are missing')
    }
    })


    function makeEditable(){
        const editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(element =>{
            element.addEventListener('click',function(){
                const currentElement = element as HTMLElement;
                const currenValue = currentElement.textContent || "";

                //replace content
                if (currentElement.tagName==="p" || currentElement.tagName==='SPAN'){
                    const input = document.createElement('input')
                    input.type = 'text'
                    input.value = currenValue
                    input.classList.add('editing=input')


                    input.addEventListener('blur',function(){
                        currentElement.textContent = input.value;
                        currentElement.style.display = 'inline'
                        input.remove
                    })


                    currentElement.style.display ='none'
                    currentElement.parentNode?.insertBefore(input,currentElement)
                    input.focus()
                }
            })
        }
        )
    }