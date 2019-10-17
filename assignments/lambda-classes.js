// CODE here for your Lambda Classes

class Person{
  constructor(atters)
  this.name = atters.name,
  this.age = atters.age,
  this.location = atters.location
}
speak(){
  return `Hello my nae is ${this.name}, I am from ${this.location}`;
}

class Instructor extends Person {
  constructor(atters){
  super(atters);
  this.specialty = atters.specialty,
  this.favLanguage = atters.favLanguage,
  this.catchPhrase = "Don't forget the homes",
  } 
  demo(subject){
    return `Today we are learning about ${this.subject}`;
  }
  grade(student){
    return `${student.name} receives a perfect scores on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(atters, favSubject){
    super(atters);
    var favSubject = [];
  this.previousBackground = atters.previousBackground,
  this.className = atters.className,
  this.favSubject = atters.favSubject,
}
listsSubjects(favSubject){
  console.log(favSubject);
}
PRAssignment(subject){
  `${student.name} has submitted a PR for {subject}`;
}
sprintChallenge(){
  `${student.name} has begun sprint challenge on ${subject}`;
}
}

class ProjectManager extends Student {
  constructor(atters){
    super(atters);
    this.readClassName = atters.readClassName;
    this.favInstructor = atters.favInstructor;
  }
standup(slackChannel){
  `${name} announces to ${channel}, @channel standy times!​​​​​`
}
debugsCode(student,subject){
  `${name} debugs ${student.name}'s code on ${subject}`;
}


