
const numberOfMuscles = labelMusclesData.length;
const copyData = labelMusclesData.slice();
const shuffledArray = shuffleArray(copyData);
const answers = [];
const wrongAnswers = [];
let score = 0;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//check answers
function checkAnswers(){
    for(let i=1; i<= numberOfMuscles; i++){
        let currentInput = document.getElementById(i).value;
        answers.push(currentInput);
    }
    for(a = 0;a<answers.length;a++){
        if(answers[a] == labelMusclesData[a])
        {  
            score ++;
        }else{
            wrongAnswers.push(labelMusclesData[a]);
        }
    }
    document.getElementById("wrongAnswersBox").innerHTML = `Your score is ${score}.`
    if(wrongAnswers.length > 0){
        document.getElementById("wrongAnswersBox").innerHTML += `You need to work on these words.`
        wrongAnswers.map((x)=>{
        document.getElementById("wrongAnswersBox").innerHTML += `<li>${x}</li>`
        }); 
    }
    document.getElementById("answersBox").innerHTML = "";
    document.getElementById("inputs").innerHTML = "";
    document.getElementById("imageHolder").innerHTML = "";
    document.getElementById("submit").style.display ="none";
    document.getElementById("instructions").innerHTML = "";
    
}
//produces answer box with shuffled words
function populateAnswerBox(){
    let a = 0;
    for(let a=0;a<shuffledArray.length;a++){
    document.getElementById("answersBox").innerHTML += `<li>${shuffledArray[a]}</li>`;
    }
}
//produces input boxes based on length of array
function populateInputs(numberToGenerate){
    for(let i = 1; i<=numberToGenerate;i++){
        document.getElementById("inputs").innerHTML += `<label for "${i}">${i}.</label>
    <input id="${i}"/></br>`
    }
    populateAnswerBox()
}
function reset(){
    location.reload();
}
populateInputs(numberOfMuscles);
document.getElementById("submit").addEventListener("click", checkAnswers);
document.getElementById("restart").addEventListener("click",reset);
