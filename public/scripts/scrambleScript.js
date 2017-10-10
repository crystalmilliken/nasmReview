const muscles = shuffleArray(data);
let num = 0;
let Score = 0;
let currentMuscle = "";
let multipleChoiceArray = [];
let tryNum = 0;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function scrambleWord(wordString){
    let a = wordString.split("")
        , n = a.length;
    for(let i = n - 1; i >0; i--){
        let j = Math.floor(Math.random() * (i +1));
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp; 
    }
    return a.join("");
}
function splitWords(wordToSplit){
    let newScrambledWord = [];
    let a = wordToSplit
        , n = wordToSplit.split(" ");
    n.map((x)=>{
        return newScrambledWord.push(scrambleWord(x));
    })
    return newScrambledWord.join(" ");
    
}
function populateCurrentMuscle(){
    let scrambledMuscle = ""
    if(currentMuscle.indexOf(" ")>0){
        scrambledMuscle = splitWords(currentMuscle);
        console.log(`currentmuscle: ${currentMuscle}`);//for testing purposes
        document.getElementById("imageHolder").innerHTML = `<img id=${muscles[num].name} src=${muscles[num].image} style="display:inline;height:100%"></img>`;
        document.getElementById("muscleDescriptionContainer").innerHTML = `<p>${muscles[num].description}</p>`;
        document.getElementById("unscramble").innerHTML = scrambledMuscle;


    }else{
    scrambledMuscle = scrambleWord(currentMuscle);
    console.log(`currentmuscle: ${currentMuscle}`);//for testing purposes
    document.getElementById("imageHolder").innerHTML = `<img id=${muscles[num].name} src=${muscles[num].image} style="display:inline;height:100%"></img>`;
    document.getElementById("muscleDescriptionContainer").innerHTML = `<p>${muscles[num].description}</p>`;
    document.getElementById("unscramble").innerHTML = scrambledMuscle;

}
}
function beginQuiz(){
    if(num < muscles.length){
    let muscleObject = muscles[num];
    currentMuscle = muscles[num].name;
    let multipleNum = 0;
    muscles.map((x)=>{
        if(x.name == muscles[num].name){
            populateCurrentMuscle();
        }
        
    })
    num++;
    }else{
        alert(`Your score is ${Score}`);
        document.getElementById("imageHolder").innerHTML = "";
        document.getElementById("muscleDescriptionContainer").innerHTML = "";
        document.getElementById("unscramble").innerHTML = "";
    }

}
function tryWord(){
    let guess = document.getElementById("userAttempt").value;
    guess = guess.trim();
    if(guess == currentMuscle){
        Score++;
        document.getElementById("userAttempt").value = "";
        beginQuiz();
    }else if(tryNum < 3){
        tryNum++;
        alert("try again")
    }else{
        alert(`Your guess was ${guess}. The answer was ${currentMuscle}`)
        beginQuiz();
    }
}
function restart(){
    location.reload();
}
beginQuiz()
document.getElementById("restart").addEventListener("click",restart);
document.getElementById("try").addEventListener("click",tryWord);
