const ApiUrl = ('studenInfo.json');
const selectStudent = document.getElementById('selectStudent');
const StudentInfo = document.getElementById('studentInfo-box');
const modalBox = document.getElementById('modalBox');
let modalContent = document.getElementById('modalContent');
let Closebtn = document.getElementById('popupClose');


fetch(ApiUrl)
.then(response => response.json())
.then(datas => {
    for (let data of datas){
        let option = document.createElement('option');
         option.value = data.id;
         option.textContent = data.name;
         selectStudent.appendChild(option);
    }
});

function StudentAllInfo(studentId){
    fetch(`${ApiUrl}`)
    .then(response =>  response.json())
    .then(data => {
        const student = data.find(s => s.id == studentId);
        console.log(student);
        let studentData =  `
        <img class="studentImg" src="${student.img}" alt="Photo Nai">
        <h2>${student.name}</h2>
        <button  onclick="showModal()">See details</button>
        `;
        StudentInfo.innerHTML = studentData;

        //modalcontent
         let studentDetails = `
         <p>Name: ${student.name}</p>
         <p>Id Number: ${student.id}</p>
        <p>Age: ${student.age}</p>
        <p>Department: ${student.major}</p>
        <p>CGPA: ${student.grade}</p>
        `;
        modalContent.innerHTML = studentDetails;
    })
};
selectStudent.addEventListener('change', function(){
    let selectStudentId = selectStudent.value;
    StudentAllInfo(selectStudentId);
}
);
function showModal(){
    modalBox.style.display="block";
}
Closebtn.addEventListener('click',function(){
    modalBox.style.display = 'none';
});


