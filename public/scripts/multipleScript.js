
$(document).ready(function() {
const muscles = shuffleArray(data);
let num = 0;
let currentMuscle = "";
let Score = 0;
let multipleChoiceArray = [];
let wrongAnswers = [];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function populateCurrentMuscle(){
    console.log(`currentmuscle: ${currentMuscle}`);//for testing purposes
    document.getElementById("imageHolder").innerHTML = `<img id=${muscles[num].name} src=${muscles[num].image} style="display:inline;height:100%"></img>`;
    document.getElementById("muscleDescriptionContainer").innerHTML = `<p>${muscles[num].description}</p>`;
}
function beginQuiz(){
    let muscleObject = muscles[num];
    currentMuscle = muscles[num].name;
    let multipleNum = 0;
    muscles.map((x)=>{
        if(x.name == muscles[num].name){
            multipleChoiceArray.push(currentMuscle);
            populateCurrentMuscle();
        }
        else if(x.name != muscles[num].name && multipleNum < 3){
            multipleChoiceArray.push(x.name);
            multipleNum++;
        }
    })
    num++;
    populateMulitpleChoice();
}
function populateMulitpleChoice(){
    if(num<muscles.length){
        let tempNum = 0;
        shuffleArray(multipleChoiceArray);
        multipleChoiceArray.map((a)=>{
            if(tempNum < 4){
            document.getElementById("multiple").innerHTML += `
                <label class="form-check-label" style="margin-right:1em;">
                    <input  class="form-check-input" type="radio" name="musclesRadio" id="${a}" value="${a}">
                    ${a}
                </label>
            `
            tempNum++;
            }
        })
    }else if(wrongAnswers.length>0){
        document.getElementById("imageHolder").innerHTML = "";
        document.getElementById("muscleDescriptionContainer").innerHTML = "";
        document.getElementById("wrongAnswersDiv").innerHTML +=`<p style="margin-bottom:2em">You need to work on the following terms:</p>`   
        wrongAnswers.map((x)=>{
            document.getElementById("wrongAnswersDiv").innerHTML +=
            `<li >${x}</li>`
        })
        document.getElementById("wrongAnswersDiv").innerHTML += `<p style="margin-bottom:2em;margin-top:1em">Score is ${Score}</p>`;
    }else{
        alert("You got them all right!!")   
        document.getElementById("imageHolder").innerHTML = "";
        document.getElementById("muscleDescriptionContainer").innerHTML = "";
    }
}
function compareAnswer(a){
    if(a.value == currentMuscle){
        Score++;
        a.checked = false;
    }else{
        a.checked = false;
        wrongAnswers.push(currentMuscle);
    }
    multipleChoiceArray = [];
    document.getElementById("multiple").innerHTML = "";
    beginQuiz();
}
function findChecked(){
    let checkedOption = document.getElementsByName('musclesRadio');
    for(let i =0;i<checkedOption.length;i++){
        if(checkedOption[i].checked){
            compareAnswer(checkedOption[i])
        }
    }
}
beginQuiz();
document.getElementById("restart").addEventListener("click",(()=>{location.reload()}));
document.getElementById("checkAnswer").addEventListener("click",findChecked);
});
