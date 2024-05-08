/*
* File: app.js
* Author: Nagy Gergő
* Copyright: 2024, Nagy Gergő
* Group: Szoft I-2-N
* Date: 2024-05-08
* Github: https://github.com/nagygergo27/
* Licenc: GNU GPL
*/


const doc = {
    complainBody: document.querySelector("#complainBody")
}


function getComplaints(){
    let url = " http://localhost:8000/complaints"
    fetch(url)
    .then(response => response.json())
    .then(result => {
        renderComplaints(result)
    })
}

getComplaints()

function renderComplaints(complaintsList){
    complaintsList.forEach(complain =>{
        const tr = document.createElement('tr')
        tr.innerHTML =
        `
        <td>${complain.id}</td>
        <td>${complain.description}</td>
        <td>${complain.complaint}</td>
        <td>${complain.product}</td>
        <td>${complain.type}</td>
        ` 
        doc.complainBody.appendChild(tr)
    });
}