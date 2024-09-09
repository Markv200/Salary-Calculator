let AnnualSalary = 0
function onReady() {
console.log('sdf')
}

onReady()

function renderTotalMonth(){
    let total = document.getElementById('total');
    total.textContent = AnnualSalary
    let Salary = document.querySelector("p")


    if (AnnualSalary >20000 ){
        Salary.classList.add('over-budget') 
    }else{
        Salary.classList.remove('over-budget')
    }
}

function submitForm(event){
    event.preventDefault()

    let inputfirstName = document.querySelector('[data-testid="firstNameInput"]').value
    let inputlastName =  document.querySelector('[data-testid="lastNameInput"]').value
    let inputID = document.querySelector('[data-testid="idInput"]').value
    let inputtitle = document.querySelector('[data-testid="titleInput"]').value
    let inputSalary = document.querySelector('[data-testid="annualSalaryInput"]').value

    let Names = document.getElementById('Names') 
    Names.innerHTML +=`
    <tr>
        <td>${inputfirstName}</td>
        <td> ${inputlastName}</td>
        <td> ${inputID}</td>
        <td> ${inputtitle}</td>
        <td> ${inputSalary}</td>
        <td><button onClick = "deleteButton(event)">Delete</button</td>
    </tr>`
    // form.reset();
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

    AnnualSalary += Number(inputSalary);
    renderTotalMonth();


}

function deleteButton(event){
    let deleteButton = event.target
    let  =  rowToDelete = deleteButton.closest('tr');
    rowToDelete.remove()

}


