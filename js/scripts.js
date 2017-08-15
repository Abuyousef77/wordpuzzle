//Back-End Logic
var replaceVowels = function(sentenceWithVowels) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];


  for(var index = 0; index < sentenceWithVowels.length; index ++) {
    for(var k = 0; k < vowels.length; k ++ ) {
      sentenceWithVowels = sentenceWithVowels.replace(vowels[k], "-");
    };
  };
  alert(sentenceWithVowels);
  return sentenceWithVowels;
};

//Front-End Logic
$(document).ready(function() {
  $("#wordz").submit(function(event) {
    event.preventDefault();

    //Find and store user input
    var item1 = $("#item1").val();

    var sentenceWithoutVowels = replaceVowels(item1);

//Hide the answer
    //We actually don't need the line below   -\__(-_-)__/-
    $("#item1").hide();

    $("#sentence").text(sentenceWithoutVowels);
  });
});
