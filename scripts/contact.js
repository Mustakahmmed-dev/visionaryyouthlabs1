  let formSubmitBtn = document.getElementById("form-submit-btn");
  formSubmitBtn.addEventListener("submit", function(event){
    
    // Prevent the default form submission behavior
    // event.preventDefault();

    let submitSucessAlert = document.getElementById("submit-success-alert");
    submitSucessAlert.style.display = "block";

    // Clear the form submission
    let clearForm = document.getElementById("form-submit-btn");
    // clearForm.reset()

    // Set the user name to success alert
    const userFirstName = document.getElementById("user-name");
    console.log(userFirstName.value);
    const setUserFirstName = document.getElementById("set-user-name");
    setUserFirstName.innerText = "Hi " + userFirstName.value + ", ";

  })