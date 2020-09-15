const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHorasToMinutes(time){
  const [hours, minutes] = time.split(":")
  return Number((hours * minutes) + minutes) 
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHorasToMinutes
}
