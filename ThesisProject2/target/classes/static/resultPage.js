window.onload = function() {
      var positiveWords = localStorage.getItem('positiveWords');
      var negativeWords = localStorage.getItem('negativeWords');
      var sentence = localStorage.getItem('sentence');
      var sentiment = localStorage.getItem('sentiment');
      var positiveCount = localStorage.getItem('positiveCount');
      var negativeCount = localStorage.getItem('negativeCount');
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

      var counts =  {
              positiveCount:  localStorage.getItem('positiveCount'),
              negativeCount: localStorage.getItem('negativeCount'),
              };

          const div = document.getElementById("chartContainer");
          setTimeout(function() {
                              var chart = new CanvasJS.Chart("chartContainer", {
                                  animationEnabled: true,
                                  theme: "light2", // "light1", "light2", "dark1", "dark2"
                                  title:{
                                      text: "Sentiment An2234alysis"
                                  },
                                  axisY: {
                                      title: ""
                                  },
                                  data: [{
                                      type: "column",
                                      dataPoints: [
                                          { y: parseInt(counts.positiveCount), label: "Positive" },
                                          { y: parseInt(counts.negativeCount),  label: "Negative" },
                                      ]
                                  }]
                              });

                              div.style.opacity = "1";
                              chart.render();
                        }, 3700);
    };