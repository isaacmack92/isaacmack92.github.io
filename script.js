var totalNum = 1;
var questionCounter = 1;
function Question(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}
var question1 = new Question("Who is the POTUS?", ['Thomas Jefferson', 'Barack Obama', 'John McCain'], 1);
var question2 = new Question("What band is Dave Grohl currently a member of?", ['Foo Fighters', 'Paramore', 'The Strokes'], 0);
var question3 = new Question("Which of these people is not a basketball player?", ['Marshawn Lynch', 'Kirk Hinrich', 'Anthony Davis'], 0);
var question4 = new Question("What is the capital of Illinois?", ['Brooklyn', 'Detroit', 'Springfield'], 2);
var questions = [question1, question2, question3, question4];
var correct = [0, 0, 0, 0];
var box = document.getElementById("questionBox");
var btns = document.getElementById("buttons");
box.innerHTML = questions[0].question + "<br>";
    for(var k = 0; k < 3; k++) {
        box.innerHTML = box.innerHTML + "<input type=\"radio\" name=\"test\" value=\""+k+"\">"+ questions[0].choices[k] +"</input>" + "<br>";
    }

function checkAnswer() {
    var toTest = document.getElementsByName('test');
    for(var i = 0; i < 3; i++){
        if(toTest[i].checked) {
            if(toTest[i].value==questions[questionCounter-1].correctAnswer) {
                correct[questionCounter]=1;
                return true;
            }
            else {
            return false;
        }
        }
    }
}

function next() {
    var isValid = validate();
    if(isValid) {
        checkAnswer();
        checkIfDone();
        box.innerHTML = questions[questionCounter].question + "<br>";
        for(var j = 0; j < 3; j++) {
            box.innerHTML = box.innerHTML + "<input type='radio' name='test' value='"+j+"'>"+ questions[questionCounter].choices[j] +"  </input>" + "<br>";
        }
        questionCounter++;
    }
}

function prev() {
    box.innerHTML = questions[questionCounter-2].question + "<br>";
    for(var m = 0; m < 3; m++) {
        box.innerHTML = box.innerHTML + "<input type='radio' name='test' value='"+m+"'>"+ questions[questionCounter-2].choices[m] +"</input>" + "<br>";
        }
    questionCounter--;
    correct[questionCounter]=0;
    totalNum--;
    }


function checkIfDone() {
    var total = 0;
    if(questionCounter == questions.length) {
        for(var q = 0; q < correct.length; q++) {
        total += correct[q];
    }
        box.innerHTML = "You have completed the quiz! You got " + total + " out of " + questionCounter + " questions correct!";
        btns.innerHTML = "<button onclick='window.location.reload()'>Start Over</button>";
    }
}

function validate() {
    var x = document.getElementsByName('test');
    if(!x[0].checked && !x[1].checked && !x[2].checked) {
        alert("Please select a choice");
        return false;
    } else {
        return true;
    }
}
