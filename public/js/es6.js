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
        Logger.logCreateDoctor(this);
    }

    getPatient(patient){
        this.patients.push(patient);
        console.log("Doctor "+this.firstName+" "+this.lastName+" got a new patient.");
    }

    scheduleExamination(examination){
        console.log("Doctor "+this.firstName+" "+this.lastName+" scheduled "+examination.type+" examination.");
    }
}

class Patient extends Human {
    constructor(firstName, lastName, jmbg, medicalRecord){
        super(firstName, lastName);
        this.jmbg = jmbg;
        this.medicalRecord = medicalRecord;
        this.doctor="This patient still didn't choose a doctor";
        Logger.logCreatePatient(this);
    }

    chooseDoctor(doctor){
        this.doctor = doctor;
        doctor.getPatient(this);
        Logger.logChoosingDoctor(this, this.doctor)
    }
}

class MedicalExamination {
    constructor(date, time, patient, type){
        this.date = date;
        this.time = time;
        this.patient = patient;
        this.type = type;
    }
}

class BloodPressureExamination extends MedicalExamination{
    constructor(date, time, patient, type){
        super(date, time, patient, type);
        this.topPressure;
        this.bottomPressure;
        this.pulse;
    }

    performExamination(){
        console.log('Perform blood pressure examination for the patient: '+this.patient.firstName+' '+this.patient.lastName+'.');

        Logger.logPerformExamination(this);

        this.topPressure = 110;
        this.bottomPressure = 70;
        this.pulse = 60; 

        console.log('Result of the performed examination: Blood pressure is '+this.topPressure+'/'+this.bottomPressure+', the pulse is a '+this.pulse+' per minute.')
    }
}

class LevelOfBloodSugarExamination extends MedicalExamination{
    constructor(date, time, patient, type){
        super(date, time, patient, type);
        this.value;
        this.timeOfTheLastMeal;

    }

    performExamination(){
        console.log('Perform level of blood sugar examination for the patient: '+this.patient.firstName+' '+this.patient.lastName+'.');

        Logger.logPerformExamination(this);

        this.value = 50;
        this.timeOfTheLastMeal = '7:15';

        console.log('Result of performed examination: Sugar value is '+this.value+', time of the last meal was '+this.timeOfTheLastMeal+'.')
    }
}

class CholesterolLevelExamination extends MedicalExamination{
    constructor(date, time, patient, type){
        super(date, time, patient, type);
        this.value;
        this.timeOfTheLastMeal;
    }

    performExamination(){
        console.log('Perform cholesterol level examination for the patient: '+this.patient.firstName+' '+this.patient.lastName+'.');

        Logger.logPerformExamination(this);

        this.value = 50;
        this.timeOfTheLastMeal= '8:15';

        console.log('Result of performed examination: Cholesterol value is '+this.value+', time of the last meal was '+this.timeOfTheLastMeal+'.')
    }
}

class Logger
{
    static logCreateDoctor(doctor){
        var d = new Date();
        var datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

        console.log('['+datestring+'] Doctor '+doctor.firstName+' '+doctor.lastName+' has been created.');
    }

    static logCreatePatient(patient){
        var d = new Date();
        var datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

        console.log('['+datestring+'] Patient '+patient.firstName+' '+patient.lastName+' has been created.');
    }

    static logChoosingDoctor(patient, doctor){
        var d = new Date();
        var datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

        console.log('['+datestring+'] Patient '+patient.firstName+' '+patient.lastName+' has chosen '+doctor.firstName+' '+doctor.lastName+' for his doctor.');
    }

    static logPerformExamination(examination){
        var d = new Date();
        var datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

        console.log('['+datestring+'] Examination '+examination.type+' has been performed on a patient '+examination.patient.firstName+' '+examination.patient.lastName+'.');
    }
}

var drMilan = new Doctor('Milan', 'Markovic', 'Neurosurgeon');
var pacDragan = new Patient('Dragan', 'Filipovic', 123123123, 555888);

pacDragan.chooseDoctor(drMilan);

var examination1 = new LevelOfBloodSugarExamination('19-04-2018','08:30', pacDragan, 'level of blood sugar');
drMilan.scheduleExamination(examination1);

var examination2 = new BloodPressureExamination('19-04-2018', '09:30', pacDragan, 'blood pressure');
drMilan.scheduleExamination(examination2);

var examination3 = new CholesterolLevelExamination('19-04-2018','10:30', pacDragan, 'cholesterol level');

examination1.performExamination();
examination2.performExamination();
