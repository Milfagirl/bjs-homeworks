function getAnimalSound(animal) {
    // let sound;
           
    if(typeof animal == "undefined") {
        return null
    } 
    sound = animal.sound;
    
    if(typeof animal !== "undefined") {
        return sound;
    } 
}

function getAverageMark(marks) {
    let average = 0;
    let value = 0;
    let roundedAverage;
    for (let i=0; i< marks.length; i++) {   //перебираем массив
        value = Number(marks[i]) + value;    //оценки переводим в числовой тип и суммируем
    }
    average = value / marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage
}

function checkBirthday(birthday) {

    // Делала в предыдущем домашнем задании



    // код для задачи №3 писать здесь
    // return verdict
}