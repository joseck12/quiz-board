function onSubmit() {
  var score = 0;
  var numOfQuestions = 5;
  var ansArr = ['a', 'c', 'd', 'a', 'a', ];

  var q1 = $(document).forms[quiz][q1].value;
  var q2 = document.forms[quiz][q2].value;
  var q3 = document.forms[quiz][q3].value;
  var q4 = document.forms[quiz][q4].value;
  var q5 = document.forms[quiz][q5].value;

  for (var i = 1; i <= numOfQuestions; i++) {
    if (eval('q' + i) == '') {
      alert("You missed question number" + i);
    }
    if (eval('q' + i) == ansArr[i - 1]) {
      score++;
    }
  }

  var results = document.getElementById('results')
  results.innerHTML = "<h2>Your Score Is " + score + " points out of " + numOfQuestions + "</h2>"
  alert('Your score is ' + score + ' out of ' + numOfQuestions);
}
}
