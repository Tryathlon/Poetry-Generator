// When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
  }
  
  function results(err,result) {
    console.log('generated');
    phrase = result.sample;
    outputformat();
  }