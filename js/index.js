class Passenger {
    constructor(PassengerId,Pclass,Name,Sex,Age,SibSp,Parch,Ticket,Fare,Cabin,Embarked,Survived) {
      this.PassengerId = PassengerId;
      this.Pclass = Pclass;
      this.Name = Name;
      this.Sex = Sex;
      this.Age = Age;
      this.SibSp = SibSp;
      this.Parch = Parch;
      this.Ticket = Ticket;
      this.Fare = Fare;
      this.Cabin = Cabin;
      this.Embarked = Embarked;
      this.Survived = Survived;
    }
    parseArray(array){
        array.forEach(element => {
            element = parseObject(element)
        });
    }
    parseObject(passenger){
        print(passenger)
    }
  };
function sendData(){
    tmpPassenger = new Passenger(document.getElementById("inputPassengerId").value,
    document.getElementById("inputPClass").value,
    document.getElementById("inputName").value,
    document.getElementById("inputSex").value,
    document.getElementById("inputAge").value,
    document.getElementById("inputSibSp").value,
    document.getElementById("inputParch").value,
    "",
    document.getElementById("inputFare").value,
    "",
    document.getElementById("inputEmbarked").value,
    0,
    )
    console.log(tmpPassenger)
}