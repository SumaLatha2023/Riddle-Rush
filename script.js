const  URL = " https://riddles-api.vercel.app/random";

let qBtn = document.querySelector('.q-btn');
let qPara = document.querySelector('#question');
let aBtn = document.querySelector('.a-btn');
let aPara = document.querySelector('#answer');
let que,ans;

function showAnswer() {
    aPara.innerText = ans;
    aBtn.innerText = "Hide Answer";
}

function hideAnswer() {
    aPara.innerText = "";
    aBtn.innerText = "Show Answer";
}

const getRiddle = async () => {
    try {
        console.log("getting data..");
        let response = await fetch(URL);
        console.log(response);
        let data = await response.json();
        console.log(data);

        que = data.riddle;
        ans = data.answer;
        // show question
        qPara.innerText = que;
        hideAnswer() // reset answer
        aBtn.style.display = "inline"; 
    }
    catch(error) {
        console.error(error);
        qPara.innerText = "Failed to fetch a riddle. Please try again.";
        aBtn.style.display = "none";
    }
    
};

qBtn.addEventListener("click", getRiddle);

aBtn.addEventListener("click", () => {
    if(aBtn.innerText === "Show Answer"){
        showAnswer();
    } else{ // Hide Answer
        hideAnswer();
    }
});
   