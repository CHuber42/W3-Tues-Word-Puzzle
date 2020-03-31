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

    console.log(inputSentence);
    
  });

});


// for (i=0; i < charactersToReplace.length; i++) {
   
//   inputSentence.replace(charactersToReplace[i], "-");
  
//   }
// 

//if (inputSentence[i].includes(charactersToReplace)){}

//if ("The Letter H" has somewhere in it all of the following: ("A, E, I, O, U")) Then: