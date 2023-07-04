var selectedRow  = null;
var Id = 1;
// Form Submit Funciton 
function onFormSubmit() {
    var formData = readFormData();
    if(selectedRow == null){
        //Insert new record
        insertNewRecord(formData);
    }
    else{
        //Update existing data
        updateRecord(formData);
    }
    resetForm();
}

//Get Values From form
function readFormData() {
    var formData = {};

    formData["userName"] = document.getElementById("userName").value;
    formData["email"] = document.getElementById("email").value;
    formData["gpa"] = document.getElementById("gpa").value;
    formData["age"] = document.getElementById("age").value;
    formData["degree"] = document.getElementById("degree").value;
    // return Form Data
    return formData;
}

// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = Id;
    Id +=1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gpa;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.degree;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<span class="material-symbols-outlined" onClick="onDelete(this)">delete</span><span class="material-symbols-outlined" onClick="onEdit(this)">edit_square</span>`;
    
    
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("degree").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[4].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[5].innerHTML;
    document.getElementById("submit-button").value = "Edit Student";
    document.getElementById("submit-button").classList.remove("rev");
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.userName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.gpa;
    selectedRow.cells[5].innerHTML = formData.degree;
    document.getElementById("submit-button").value = "Add Student";
    document.getElementById("submit-button").classList.add("rev");
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}