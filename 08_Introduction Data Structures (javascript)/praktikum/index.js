var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["proName"] = document.getElementById("proName").value;
  formData["proCategory"] = document.getElementById("proCategory").value;
  formData["proImage"] = document.getElementById("proImage").value;
  formData["proFresh"] = document.querySelector(
    'input[name="proFresh"]:checked'
  ).value;
  formData["proDesc"] = document.getElementById("proDesc").value;
  formData["proPrice"] = document.getElementById("proPrice").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("product")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.proName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.proCategory;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.proImage;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.proFresh;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.proDesc;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.proPrice;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<div class="d-flex">
                        <a class="btn btn-primary me-3" onClick="">Edit</a>
                        <a class="btn btn-danger" onClick="onDelete(this)">Delete</a>
                     </div>`;
}

function resetForm() {
  document.getElementById("proName").value = "";
  document.getElementById("proCategory").value = "";
  document.getElementById("proImage").value = "";
  document.querySelector('input[name="proFresh"]:checked').value = "";
  document.getElementById("proDesc").value = "";
  document.getElementById("proPrice").value = "";
  selectedRow = null;
}

function onDelete(td) {
  if (confirm("Apakah ingin menghapus data ini ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("product").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (
    document.getElementById("proName").value == "" &&
    document.getElementById("proCategory").value == "" &&
    document.getElementById("proImage").value == "" &&
    document.querySelector('input[name="proFresh"]:checked').value == "" &&
    document.getElementById("proDesc").value == "" &&
    document.getElementById("proPrice").value == ""
  ) {
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}
