function myFunction() {
    const inputObj = document.getElementById("id1");

    // Assuming checkValidity is the correct method
    if (!inputObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}
