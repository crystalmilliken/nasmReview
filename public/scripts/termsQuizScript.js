$(document).ready(function() {
            const terms = shuffleArray(data);
            let num = 0;
            let currentTerm = "";
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
            function populateCurrentTerm(){
                console.log(`currentmuscle: ${currentTerm}`);//for testing purposes
                //document.getElementById("imageHolder").innerHTML = `<img id=${terms[num].name} src=${terms[num].image} style="display:inline;height:100%"></img>`;
                document.getElementById("muscleDescriptionContainer").innerHTML = `<p>${terms[num].definition}</p>`;
            }
            function beginQuiz(){
                let termObject = terms[num];
                currentTerm = terms[num].name;
                let multipleNum = 0;
                terms.map((x)=>{
                    if(x.name == terms[num].name){
                        multipleChoiceArray.push(currentTerm);
                        populateCurrentTerm();
                    }
                    else if(x.name != terms[num].name && multipleNum < 3){
                        multipleChoiceArray.push(x.name);
                        multipleNum++;
                    }
                })
                num++;
                populateMulitpleChoice();
            }
            function populateMulitpleChoice(){
                if(num<terms.length){
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
                if(a.value == currentTerm){
                    Score++;
                    a.checked = false;
                }else{
                    a.checked = false;
                    wrongAnswers.push(currentTerm);
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
        
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-106098368-1', 'auto');
            ga('send', 'pageview');
        