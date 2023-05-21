function uploadFile(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        var contents = e.target.result;
        document.getElementById('text-input').value = contents;
      };

      reader.readAsText(file);
    }