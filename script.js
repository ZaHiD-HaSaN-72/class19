const ApiUrl = ('studenInfo.json');
const selectStudent = document.getElementById('selectStudent');
const StudentInfo = document.getElementById('studentInfo-box');

fetch(ApiUrl)
.then(response => response.json())
.then(datas => {
    for (let data of datas){
        let option = document.createElement('option');
         option.value = data.id;
         option.textContent = data.name;
         selectStudent.appendChild(option);
    }
})

function StudentAllInfo(studentId){
    fetch(`${ApiUrl}`)
    .then(response =>  response.json())
    .then(data => {
        

        const student = data.find(c => c.id == studentId);
        console.log(student);
        let studentData =  `
        
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
        <p>Department: ${student.major}</p>
        <p>CGPA: ${student.grade}</p>
        <img class="studentImg" src="${student.img}" alt="Photo Nai">
         
        `;

        StudentInfo.innerHTML = studentData;
    })
};
selectStudent.addEventListener('change', function(){
    let selectStudentId = selectStudent.value;
    StudentAllInfo(selectStudentId);
}
);
