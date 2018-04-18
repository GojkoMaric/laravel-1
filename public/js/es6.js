class Human {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Doctor extends Human{
    constructor(firstName, lastName, speciality){
        super(firstName, lastName);
        this.speciality = speciality;
        this.patients = [];
    }

    getPatient(patient){
        this.patients.push(patient);
        console.log("Doctor "+this.firstName+" "+this.lastName+" got a new patient.");
    }

    scheduleExamination(patient){
        console.log("Doctor "+this.firstName+" "+this.lastName+" scheduled examintaion.");
    }

    measuringBloodPressure(){

    }

    measuringLevelOfBloodSugar(){

    }

    measuringCholesterolLevel(){
        
    }


}


class Patient extends Human {
    constructor(firstName, lastName, jmbg, medicalRecord){
        super(firstName, lastName);
        this.jmbg = jmbg;
        this.medicalRecord = medicalRecord;
    }

    choseDoctor(doctor){
        this.doctor = doctor;
        console.log('Patient '+this.firstName+' '+this.lastName+' chose a doctor.');
    }
}

var drMilan = new Doctor('Milan', 'Markovic', 'Neurohirug');
var pacDragan = new Patient('Dragan', 'Filipovic', 123123123, 555888);


console.log(drMilan, pacDragan);
pacDragan.choseDoctor(drMilan);
drMilan.getPatient(pacDragan);
drMilan.scheduleExamination(pacDragan);

console.log(drMilan, pacDragan);

