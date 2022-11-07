const testData  = [
    {
      "question": "Czy miałeś kontakt z osoba chora na Covid w ciągu osatnich 5-6 dni?",
      "a": "Tak",
      "b": "Nie",
      "weight":5,
      "correct": "a"
    },
    {
      "question": "Czy utraciłeś smak lub węch?",
      "a": "Tak",
      "b": "Nie",
      "weight": 5,
      "correct": "a"
    },
    {
      "question": "Czy masz kaszel?",
      "a": "Tak",
      "b": "Nie",
      "weight": 1,
      "correct": "a"
    },
    {
      "question": "Czy masz bóle głowy?",
      "a": "Tak",
      "b": "Nie",
      "weight": 3,
      "correct": "a"
    },
    {
      "question": "Czy masz gorączke?",
      "a": "Tak",
      "b": "Nie",
      "weight": 2,
      "correct": "a"
    },
    {
      "question": "Czy czujesz się zmęczony?",
      "a": "Tak",
      "b": "Nie",
      "weight": 1,
      "correct": "a"
    },
    {
      "question": "Czy masz ból gardła?",
      "a": "Tak",
      "b": "Nie",
      "weight": 1,
      "correct": "a"
    },
  ]
  const quiz = document.querySelector(".quiz-header");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.querySelector("#a_text");
  const b_text = document.querySelector("#b_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  loadTest();
  
  function loadTest() {
      if (currentQuestion < testData.length) {
          questionEl.innerText = testData[currentQuestion].question;
          a_text.innerText = testData[currentQuestion].a;
          b_text.innerText = testData[currentQuestion].b;
      } else {
        if(score < 10)
        quiz.innerText = `Its not a covid, propably flue `;
        else if(score >= 10 && score < 15)
        quiz.innerText = `Its propably a covid, go to doctor to be sure `;
        else
        quiz.innerText = `Its covid, have a lot of rest and put ur mask on :) `;
         
        submitBtn.innerText = "Restart";
      }
  }
  
  function deselectAnswers() {
      answerEls.forEach((e) => {
          e.checked = false;
      });
      loadTest();
  }
  
  function getSelected() {
      answerEls.forEach((e) => {
          if (e.checked) {
              if (e.id == testData[currentQuestion].correct) {
                 score= score + testData[currentQuestion].weight;
  
              }
          }
      });
  
      currentQuestion++;
      deselectAnswers();
  }
  
  submitBtn.addEventListener("click", () => {
  
      if (currentQuestion < testData.length) {
          getSelected();
      }
      else {
          location.reload();
      }
  });