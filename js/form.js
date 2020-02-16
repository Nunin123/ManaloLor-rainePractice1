function validation() {
    if (document.getElementsByClassName('validate').value == '') {
        return false;
    }  
    else {
        alert("Event creation, complete! Data saved.");
        return true;
    }
}

function dateValidation() {
    var today = new Date();
    var startDate = new Date(document.getElementById("date1").value);   
    var endDate = new Date(document.getElementById("date2").value);
    var postingDate = new Date(document.getElementById("date3").value);

    if (startDate < today) {
        alert("Event creation failed! Event starting date should only start from the date tomorrow onwards.");
        document.getElementById("date1").value = '';
        return false;
    }
    else if (endDate < startDate) {
        alert("Event creation failed! Event ending date should not be before the starting date.");
        document.getElementById("date2").value = '';
        return false;
    }
    else if (postingDate < startDate || postingDate > endDate) {
        alert("Event creation failed! Event posting date should only be between the starting date and ending date."); 
        document.getElementById("date3").value = '';
        return false;
    }
    else {
        return true;
    }
}