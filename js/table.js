let tableEle = document.getElementById("user");

function add() {
    let trEle = document.createElement("tr");
    trEle.id = "trEleId" + tableEle.rows.length;

    let numberTdEle = document.createElement("td");
    let nameTdEle = document.createElement("td");
    let genderTdEle = document.createElement("td");
    let ageTdEle = document.createElement("td");
    let operationTdEle = document.createElement("td");

    numberTdEle.innerText = tableEle.rows.length;
    nameTdEle.innerText = document.getElementById("nameId").value;
    genderTdEle.innerText = document.getElementById("genderId").value;
    ageTdEle.innerText = document.getElementById("ageId").value;
    operationTdEle.innerHTML = "<a href='javascript:void(0)' onclick='del(this)'>删除</a>";

    trEle.appendChild(numberTdEle);
    trEle.appendChild(nameTdEle);
    trEle.appendChild(genderTdEle);
    trEle.appendChild(ageTdEle);
    trEle.appendChild(operationTdEle);

    tableEle.appendChild(trEle);

}

function del(e) {
    tableEle.removeChild(e.parentElement.parentElement);
    let rowArr = tableEle.rows;
    for (let i = 1; i < rowArr.length; i++) {
        rowArr[i].firstChild.innerText = i;
    }
}
