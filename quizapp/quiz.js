const quizobject = [
    {
        question: "Which keyword is used to declare a variable that can be reassigned?",
        answers: [
            { text: "const", correct: false },
            { text: "let", correct: true },
            { text: "static", correct: false },
            { text: "define", correct: false }
        ]
    },
    {
        question: "Which method adds an element to the end of an array?",
        answers: [
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "push()", correct: true },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "Which symbol is used for strict equality in JavaScript?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        answers: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.object()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },
    {
        question: "Which method creates a new array by applying a function to every element?",
        answers: [
            { text: "forEach()", correct: false },
            { text: "filter()", correct: false },
            { text: "map()", correct: true },
            { text: "reduce()", correct: false }
        ]
    },
    {
        question: "Which keyword is used to create a function in JavaScript?",
        answers: [
            { text: "function", correct: true },
            { text: "func", correct: false },
            { text: "def", correct: false },
            { text: "method", correct: false }
        ]
    },
    {
    question: "Which method removes the last element from an array?",
    answers: [
        { text: "push()", correct: false },
        { text: "pop()", correct: true },
        { text: "shift()", correct: false },
        { text: "slice()", correct: false }
    ]
},
{
    question: "Which method removes the first element from an array?",
    answers: [
        { text: "pop()", correct: false },
        { text: "shift()", correct: true },
        { text: "unshift()", correct: false },
        { text: "remove()", correct: false }
    ]
},
{
    question: "Which method adds an element to the beginning of an array?",
    answers: [
        { text: "push()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: true },
        { text: "add()", correct: false }
    ]
},
{
    question: "What does typeof null return in JavaScript?",
    answers: [
        { text: "null", correct: false },
        { text: "undefined", correct: false },
        { text: "object", correct: true },
        { text: "string", correct: false }
    ]
},
{
    question: "Which value represents a variable that has been declared but not assigned?",
    answers: [
        { text: "null", correct: false },
        { text: "undefined", correct: true },
        { text: "false", correct: false },
        { text: "NaN", correct: false }
    ]
},
{
    question: "Which method converts a JavaScript object into a JSON string?",
    answers: [
        { text: "JSON.parse()", correct: false },
        { text: "JSON.stringify()", correct: true },
        { text: "JSON.convert()", correct: false },
        { text: "JSON.toString()", correct: false }
    ]
},
{
    question: "Which array method is used to create a new array containing elements that pass a condition?",
    answers: [
        { text: "map()", correct: false },
        { text: "filter()", correct: true },
        { text: "reduce()", correct: false },
        { text: "forEach()", correct: false }
    ]
},
{
    question: "Which loop is commonly used to iterate through an array using an index?",
    answers: [
        { text: "if", correct: false },
        { text: "for", correct: true },
        { text: "switch", correct: false },
        { text: "try", correct: false }
    ]
},
{
    question: "Which keyword stops a loop immediately?",
    answers: [
        { text: "stop", correct: false },
        { text: "exit", correct: false },
        { text: "break", correct: true },
        { text: "return", correct: false }
    ]
},
{
    question: "Which keyword skips the current iteration of a loop?",
    answers: [
        { text: "skip", correct: false },
        { text: "continue", correct: true },
        { text: "break", correct: false },
        { text: "next", correct: false }
    ]
},
{
    question: "Which DOM method selects an element by its ID?",
    answers: [
        { text: "querySelector()", correct: false },
        { text: "getElementById()", correct: true },
        { text: "getElement()", correct: false },
        { text: "selectById()", correct: false }
    ]
},
{
    question: "Which property is used to change the HTML content of an element?",
    answers: [
        { text: "innerHTML", correct: true },
        { text: "htmlContent", correct: false },
        { text: "textHTML", correct: false },
        { text: "contentHTML", correct: false }
    ]
},
{
    question: "Which method is used to create a new HTML element using JavaScript?",
    answers: [
        { text: "createElement()", correct: true },
        { text: "newElement()", correct: false },
        { text: "makeElement()", correct: false },
        { text: "createHTML()", correct: false }
    ]
},
{
    question: "Which event occurs when a user clicks an element?",
    answers: [
        { text: "hover", correct: false },
        { text: "change", correct: false },
        { text: "click", correct: true },
        { text: "submit", correct: false }
    ]
}
];
const quizobject1=[
{
    question: "What does HTML stand for?",
    answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "High Text Machine Language", correct: false },
        { text: "Hyperlink Text Mark Language", correct: false },
        { text: "Home Tool Markup Language", correct: false }
    ]
},
{
    question: "Which tag is used to create a paragraph?",
    answers: [
        { text: "<para>", correct: false },
        { text: "<p>", correct: true },
        { text: "<paragraph>", correct: false },
        { text: "<text>", correct: false }
    ]
},
{
    question: "Which tag is used to create the largest heading?",
    answers: [
        { text: "<h6>", correct: false },
        { text: "<heading>", correct: false },
        { text: "<h1>", correct: true },
        { text: "<head>", correct: false }
    ]
},
{
    question: "Which tag is used to create a hyperlink?",
    answers: [
        { text: "<link>", correct: false },
        { text: "<a>", correct: true },
        { text: "<href>", correct: false },
        { text: "<url>", correct: false }
    ]
},
{
    question: "Which attribute specifies the URL of a link?",
    answers: [
        { text: "src", correct: false },
        { text: "link", correct: false },
        { text: "href", correct: true },
        { text: "url", correct: false }
    ]
},
{
    question: "Which tag is used to display an image?",
    answers: [
        { text: "<image>", correct: false },
        { text: "<img>", correct: true },
        { text: "<pic>", correct: false },
        { text: "<src>", correct: false }
    ]
},
{
    question: "Which attribute provides alternative text for an image?",
    answers: [
        { text: "title", correct: false },
        { text: "alt", correct: true },
        { text: "text", correct: false },
        { text: "description", correct: false }
    ]
},
{
    question: "Which tag creates an unordered list?",
    answers: [
        { text: "<ol>", correct: false },
        { text: "<list>", correct: false },
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false }
    ]
},
{
    question: "Which tag creates a list item?",
    answers: [
        { text: "<item>", correct: false },
        { text: "<li>", correct: true },
        { text: "<list>", correct: false },
        { text: "<ul>", correct: false }
    ]
},
{
    question: "Which tag creates a numbered list?",
    answers: [
        { text: "<ul>", correct: false },
        { text: "<nl>", correct: false },
        { text: "<ol>", correct: true },
        { text: "<li>", correct: false }
    ]
},
{
    question: "Which HTML element is used to create a button?",
    answers: [
        { text: "<btn>", correct: false },
        { text: "<button>", correct: true },
        { text: "<input-button>", correct: false },
        { text: "<click>", correct: false }
    ]
},
{
    question: "Which tag is used to create a form?",
    answers: [
        { text: "<input>", correct: false },
        { text: "<form>", correct: true },
        { text: "<fieldset>", correct: false },
        { text: "<data>", correct: false }
    ]
},
{
    question: "Which input type is used for passwords?",
    answers: [
        { text: "text", correct: false },
        { text: "hidden", correct: false },
        { text: "password", correct: true },
        { text: "secure", correct: false }
    ]
},
{
    question: "Which tag is used to create a table row?",
    answers: [
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
        { text: "<tr>", correct: true },
        { text: "<row>", correct: false }
    ]
},
{
    question: "Which tag represents a table cell?",
    answers: [
        { text: "<cell>", correct: false },
        { text: "<td>", correct: true },
        { text: "<tr>", correct: false },
        { text: "<table-cell>", correct: false }
    ]
},
{
    question: "Which semantic element represents the navigation section?",
    answers: [
        { text: "<navigate>", correct: false },
        { text: "<navigation>", correct: false },
        { text: "<nav>", correct: true },
        { text: "<menu>", correct: false }
    ]
},
{
    question: "Which tag is used to insert a line break?",
    answers: [
        { text: "<break>", correct: false },
        { text: "<lb>", correct: false },
        { text: "<br>", correct: true },
        { text: "<newline>", correct: false }
    ]
},
{
    question: "Which declaration specifies that the document uses HTML5?",
    answers: [
        { text: "<html5>", correct: false },
        { text: "<!DOCTYPE html>", correct: true },
        { text: "<DOCTYPE HTML5>", correct: false },
        { text: "<!HTML>", correct: false }
    ]
},
{
    question: "Which element contains metadata about an HTML document?",
    answers: [
        { text: "<body>", correct: false },
        { text: "<meta>", correct: false },
        { text: "<head>", correct: true },
        { text: "<info>", correct: false }
    ]
},
{
    question: "Which element contains the visible content of a webpage?",
    answers: [
        { text: "<head>", correct: false },
        { text: "<html>", correct: false },
        { text: "<body>", correct: true },
        { text: "<main>", correct: false }
    ]
}
];
const quizobject2=[
{
    question: "What does CSS stand for?",
    answers: [
        { text: "Computer Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Syntax", correct: false },
        { text: "Colorful Style Sheets", correct: false }
    ]
},
{
    question: "Which property is used to change text color?",
    answers: [
        { text: "font-color", correct: false },
        { text: "text-color", correct: false },
        { text: "color", correct: true },
        { text: "foreground", correct: false }
    ]
},
{
    question: "Which property changes the background color?",
    answers: [
        { text: "background-color", correct: true },
        { text: "bg-color", correct: false },
        { text: "color-background", correct: false },
        { text: "background", correct: false }
    ]
},
{
    question: "Which property changes the font size?",
    answers: [
        { text: "text-size", correct: false },
        { text: "font-size", correct: true },
        { text: "size", correct: false },
        { text: "font-height", correct: false }
    ]
},
{
    question: "Which property is used to make text bold?",
    answers: [
        { text: "font-weight", correct: true },
        { text: "font-bold", correct: false },
        { text: "text-weight", correct: false },
        { text: "bold", correct: false }
    ]
},
{
    question: "Which property is used to center text?",
    answers: [
        { text: "align-text", correct: false },
        { text: "text-align", correct: true },
        { text: "center-text", correct: false },
        { text: "text-center", correct: false }
    ]
},
{
    question: "Which property changes the font family?",
    answers: [
        { text: "font-family", correct: true },
        { text: "font-type", correct: false },
        { text: "text-family", correct: false },
        { text: "family", correct: false }
    ]
},
{
    question: "Which property adds space inside an element?",
    answers: [
        { text: "margin", correct: false },
        { text: "padding", correct: true },
        { text: "spacing", correct: false },
        { text: "inside-space", correct: false }
    ]
},
{
    question: "Which property adds space outside an element?",
    answers: [
        { text: "padding", correct: false },
        { text: "margin", correct: true },
        { text: "spacing", correct: false },
        { text: "outside-space", correct: false }
    ]
},
{
    question: "Which property is used to add a border?",
    answers: [
        { text: "outline", correct: false },
        { text: "border", correct: true },
        { text: "box-border", correct: false },
        { text: "line", correct: false }
    ]
},
{
    question: "Which display value enables Flexbox?",
    answers: [
        { text: "display: block", correct: false },
        { text: "display: flex", correct: true },
        { text: "display: grid", correct: false },
        { text: "display: inline", correct: false }
    ]
},
{
    question: "Which property controls the direction of flex items?",
    answers: [
        { text: "flex-direction", correct: true },
        { text: "direction", correct: false },
        { text: "flex-flow-direction", correct: false },
        { text: "item-direction", correct: false }
    ]
},
{
    question: "Which property is used to justify flex items?",
    answers: [
        { text: "align-items", correct: false },
        { text: "justify-content", correct: true },
        { text: "flex-align", correct: false },
        { text: "content-align", correct: false }
    ]
},
{
    question: "Which property aligns flex items on the cross axis?",
    answers: [
        { text: "justify-content", correct: false },
        { text: "align-items", correct: true },
        { text: "align-content", correct: false },
        { text: "flex-align", correct: false }
    ]
},
{
    question: "Which property is used to make an element invisible and remove its space?",
    answers: [
        { text: "visibility: hidden", correct: false },
        { text: "display: none", correct: true },
        { text: "opacity: 0", correct: false },
        { text: "hidden: true", correct: false }
    ]
},
{
    question: "Which property controls the width of an element?",
    answers: [
        { text: "size", correct: false },
        { text: "element-width", correct: false },
        { text: "width", correct: true },
        { text: "box-width", correct: false }
    ]
},
{
    question: "Which property controls the height of an element?",
    answers: [
        { text: "height", correct: true },
        { text: "size-height", correct: false },
        { text: "element-height", correct: false },
        { text: "box-height", correct: false }
    ]
},
{
    question: "Which selector targets an element with a specific ID?",
    answers: [
        { text: ".", correct: false },
        { text: "#", correct: true },
        { text: "*", correct: false },
        { text: "@", correct: false }
    ]
},
{
    question: "Which selector targets elements with a specific class?",
    answers: [
        { text: "#", correct: false },
        { text: ".", correct: true },
        { text: "*", correct: false },
        { text: "$", correct: false }
    ]
},
{
    question: "Which property controls the transparency of an element?",
    answers: [
        { text: "transparent", correct: false },
        { text: "opacity", correct: true },
        { text: "visibility", correct: false },
        { text: "alpha", correct: false }
    ]
}
];
let options=document.getElementById("options")
let question=document.getElementById("question");
let JS=document.getElementById("JS-BUTTON");
let HTML=document.getElementById("HTML-BUTTON");
let CSS_button=document.getElementById("CSS-BUTTON");
let currentQuestions,newButton,textname,score=0,questionindex=0;
let previous=document.getElementById("previous")
JS.addEventListener("click", () =>{
    textname="JS";
    newButton=JS;
    if(JS.textContent==="Start JS"){
       currentQuestions=quizobject;
       questionindex=0;
       score=0;
       Display();
       HTML.style.display = "none";
       CSS_button.style.display = "none";
    }
    else if(JS.textContent==="Next"){
        Display();
        HTML.style.display = "none";
        CSS_button.style.display = "none";
    }
    else{
        startAgain();
        HTML.style.display = "inline-block";
        CSS_button.style.display = "inline-block";
    }
})
HTML.addEventListener("click", () =>{
    newButton=HTML;
    textname="HTML";
    if(HTML.textContent==="Start HTML"){
        currentQuestions=quizobject1;
       questionindex=0;
       score=0;
       Display();
       JS.style.display = "none";
       CSS_button.style.display = "none";
    }
    else if(HTML.textContent==="Next"){
        Display();
        JS.style.display = "none";
        CSS_button.style.display = "none";
    }
    else{
        startAgain();
        JS.style.display = "inline-block";
        CSS_button.style.display = "inline-block";
    }
})
function startAgain(){
    questionindex=0;
    score=0;
    newButton.textContent=`Start ${textname}`;
    options.innerHTML="";
    question.textContent="Question Goes Here";
}
function Display(){
    if(questionindex>0){
        previous.style.display="inline-block";
    }
    else{
    previous.style.display="none";
    }
    if(questionindex<currentQuestions.length){
    newButton.textContent="Next";
    options.innerHTML="";
    const currentQuestion2=questionindex;
    question.textContent=currentQuestions[questionindex].question;
    for(let j=0;j<currentQuestions[questionindex].answers.length;j++){
        let option=document.createElement("button");
        option.textContent=currentQuestions[questionindex].answers[j].text;
        options.append(option);
        option.classList.add("option");       
        option.addEventListener("click", () => {
        if(currentQuestions[currentQuestion2].answers[j].correct===true){
            option.style.backgroundColor="green";
            score++;
        }
        else{
            option.style.backgroundColor="red";
        }
        document.querySelectorAll(".option").forEach(btn =>{
            btn.disabled=true;
        })
    })
    }
    questionindex++;
}
else{
    options.innerHTML="";
    question.textContent=`Your score is ${score}`
    newButton.textContent=`Start Again`;
}
}
CSS_button.addEventListener("click", () =>{
    textname="CSS";
    newButton=CSS_button;
    if(CSS_button.textContent==="Start CSS"){
    currentQuestions=quizobject2;
       questionindex=0;
       score=0;
       Display();
       JS.style.display = "none";
       HTML.style.display = "none";
    }
    else if(CSS_button.textContent==="Next"){
        Display();
        JS.style.display = "none";
        HTML.style.display = "none";
    }
    else{
        startAgain();
        JS.style.display = "inline-block";
        HTML.style.display = "inline-block";
    }
    questionindex++;
})
previous.addEventListener("click", () =>{
    questionindex=questionindex-2;
    Display();
})