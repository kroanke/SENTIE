function clearTextAreas() {
   var uploadArea =  document.getElementById('fileInput');
   var textAreas = document.getElementsByTagName('textarea');
   var positiveWords = document.getElementById("positiveWords");
   var negativeWords = document.getElementById("negative");
   var sentimentValue = document.getElementById("sentimentValue");
   const div = document.getElementById("chartContainer");
   for (var i = 0; i < textAreas.length; i++) {
      textAreas[i].value = '';
   }
   uploadArea.value = '';
   positiveWords.textContent = '';
   negativeWords.textContent = '';
   sentimentValue.textContent = 'Sentiment Value: ';
   div.style.opacity = "0";
}

