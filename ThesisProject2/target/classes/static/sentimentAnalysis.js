const textInput = document.getElementById('text-input');
const analyzeButton = document.getElementById('analyze-button');

// Add an event listener to the button

// Function to analyze sentiment
function analyzeSentiment() {
  var sentiment;
  var positiveWords;
  var positiveCount;
  var negativeWords;
  var negativeCount;
  var sentence;
  var input_text = document.getElementById("text-input").value; // Get the text from the textarea
  // Make an HTTP POST request to the Sentiment Analysis API endpoint
    if(input_text.trim() === ""){
        alert("Input is empty");
      }
    else{
    const utku = axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: "Classify the sentiment in these sentences but return overall sentiment value first "
        + "AND ONLY RETURN THE SENTIMENT VALUES AND RETURN THE POSITIVE, NEGATIVE WORDS: "
        + input_text,
        max_tokens: 60,
        temperature: 0.0,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        sentiment = response.data.choices[0].text.trim(); // Extract the sentiment from the response

        sentence = sentiment;

        positiveWords = sentence.match(/Positive words: ([\w, ]+)/)[1].split(', ');
        var positiveString = positiveWords + '';
        positiveCount = positiveString.split(',').map(word => word.trim()).length;
        console.log(positiveCount);
        document.getElementById("positiveWords").value = positiveWords;
        console.log("Positive words: " + positiveWords);



        negativeWords = sentence.split(":")[3].split(".")[0].trim();

        document.getElementById("negative").value = negativeWords;
        var negativeString = negativeWords + '';
        negativeCount = negativeString.split(',').map(word => word.trim()).length;
        console.log("Negative words: " + negativeWords);

        const sentimentRegex = /Overall sentiment: (\w+)/;
        const sentimentRegex2 = /Overall sentiment value: (\w+)/;
        const match = sentence.match(sentimentRegex);
        const match2 = sentence.match(sentimentRegex2);

        if ((match && match.length > 1) || match2 && match2.length > 1) {
          sentiment = match ? match[1] : match2[1];
          document.getElementById("sentimentValue").textContent = "Sentiment Value: " + sentiment;
          console.log("Sentiment Value " + sentiment);
        } else {
          console.log("Sentiment not found.");
        }

      })
      .catch(error => {
        console.error(error);
      });
    }
    localStorage.setItem('positiveCount', positiveCount);
    localStorage.setItem('negativeCount', negativeCount);




}