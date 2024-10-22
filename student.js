const Student = {

    name: "Ali",
    rollNo: 198,
    cgpa: 3.3,
    program: "BBSE"
}

function std_name (){

    console.log(Student.name)
}
function std_program (){

    console.log(Student.program)
}
function std_cgpa (){

    console.log(Student.cgpa)
}

module.exports = {

    std_name,
    std_program,
    std_cgpa
}