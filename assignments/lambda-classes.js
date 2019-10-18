// CODE here for your Lambda Classes

class Person{
  constructor(atters){
  this.name = atters.name,
  this.age = atters.age,
  this.location = atters.location
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(atters){
  super(atters);
  this.specialty = atters.specialty,
  this.favLanguage = atters.favLanguage,
  this.catchPhrase = atters.catchPhrase
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(Student, subject){
    return `${Student.name} receives a perfect score on ${subject}`;
  }
}


class Student extends Person {
  constructor(atters){
    super(atters);
    this.previousBackground = atters.previousBackground,
    this.className = atters.className,
    this.favSubject = atters.favSubject
  }
  listsSubjects(HTML, CSS, Javascript){
    return `My list of subjects is ${HTML}, ${CSS}, and ${Javascript}.`;
  } 
  PRAssignment(Student, subject){
    return `${Student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(Student, subject){
    return `${Student.name} has begun a sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(atters){
    super(atters);
    this.gradClassName = atters.gradClassName;
    this.favInstructor = atters.favInstructor;
  }
  standup(name, channel){
    return `${name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(debuger, student, subject){
    return `${debuger} debugs ${student.name}'s code on ${subject}.`;
  }
}
//-------------All Objects here--------------

const william = new Person({
  name: "William",
  age: 23,
  location: "Seattle"
})

const rena = new Person ({
  name: "Rena",
  age: 19,
  location: "Minniapolis"
})

const brit = new Instructor({
  specialty: 'HTML AND CSS',
  favLanguage: 'LESS',
  catchPhrase: 'If it aint broke dont fix it.'
})

const ryan = new Instructor({
  specialty: 'reducts',
  favLanguage: 'JQuery',
  catchPhrase: 'You should laugh'
})

const brian = new Student({
 name: "Brian",
 previousBackground: "None",
 className: "WEBPT8",
 favSubject: "Algorithms"
})

const thomas = new Student({
  name: "Thomas",
  previousBackground: "stuck at tutorials",
  className: "UIUX2",
  faveSubjects: {
    HTML: "Markup Organization",
    CSS: "LESS",
    Javascript: "Objects",
  },
 })

const tommy = new ProjectManager({
  name: "Tommy",
  gradClassName: "WEBFT22",
  favInstructor: "Brit Hemming"
})

const carol = new ProjectManager({
  gradClassName: "DS11",
  favInstructor: "Alexander The Great"
})

//-----------All console.logs here-------------


console.log(rena.speak());
console.log(william.speak());
console.log(brit.demo("JavascriptIV"));
console.log(ryan.grade(william, "Build Week Project"));
console.log(thomas.listsSubjects("Markup Organization", "LESS", "Objects"));
console.log(brian.PRAssignment(brian, "Web Design"));
console.log(thomas.sprintChallenge(thomas, "JQuery"));
console.log(tommy.standup(tommy.name, "web25_tommy"));
console.log(carol.debugsCode("Jason", thomas, "Databases"));


