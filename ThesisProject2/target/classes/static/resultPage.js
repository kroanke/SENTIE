window.onload = function() {
      var positiveWords = localStorage.getItem('positiveWords');
      var negativeWords = localStorage.getItem('negativeWords');
      var sentence = localStorage.getItem('sentence');
      var sentiment = localStorage.getItem('sentiment');
      var inputText = localStorage.getItem('inputText');
      // Use the value as needed
      console.log(positiveWords);
      console.log(negativeWords);
      console.log(sentence);
      console.log(sentiment);
//      document.getElementById("text-output").value = sentence;
//      document.getElementById("text-input").value = sentiment;
      document.getElementById("sentimentValue").textContent = "Sentiment Value: " + sentiment;
      document.getElementById("text-input").value = inputText;
      document.getElementById("positiveWords").value = positiveWords;
      document.getElementById("negative").value = negativeWords;
    };