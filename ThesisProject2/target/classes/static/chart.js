function showChart() {
var counts =  {
        positiveCount: localStorage.getItem('positiveCount'),
        negativeCount: localStorage.getItem('negativeCount'),
        };
//parseInt(counts.positiveCount)
    const div = document.getElementById("chartContainer");
    setTimeout(function() {
                        var chart = new CanvasJS.Chart("chartContainer", {
                            animationEnabled: true,
                            theme: "light2", // "light1", "light2", "dark1", "dark2"
                            title:{
                                text: "Sentiment Analysis"
                            },
                            axisY: {
                                title: "",
                                interval:5
                            },
                            data: [{
                                type: "column",
                                dataPoints: [
                                    { y: 8, label: "Positive" },
                                    { y: 9,  label: "Negative" },
                                ]
                            }]
                        });

                        div.style.opacity = "1";
                        chart.render();
                  }, 3700);


}