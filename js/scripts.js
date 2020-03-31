


$(document).ready(function(){
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var inputSentence =$("input#inputSentence").val();
    console.log(inputSentence);

    charactersToReplace = ["a", "e", "i", "o", "u"];
    
    for (i=0; i <= inputSentence.length; i++) {
 
      if (charactersToReplace.includes(inputSentence[i])){
        $("#output").append("-"); 
      }
  
      else {
        $("#output").append(inputSentence[i]);
      }

    };
  });
});


$(document).ready(function(){
  

  var startingLuck = 0;

  $("form#ourQuiz").submit(function(event) {
    
    event.preventDefault();
    $("input:checkbox[name=luck]:checked").each(function() {
      startingLuck += parseInt($(this).val());
    });
    console.log(startingLuck);
    if (startingLuck >= 2) {
      $("#goodFortune").show();
    } 
    else if (startingLuck <= (-2)) {
      $("#badFortune").show();
    } 
    else {
      $("#fortune").show(); 
    }

    
  });
  
});