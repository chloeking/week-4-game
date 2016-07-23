  $( document ).ready(function() {
    var numberToGuess = 53;
    var counter = 0;
    var number1 = [10];
    var number2 = [5];
    var number3 = [3];
    var number4 = [7];
    $('number1 number2 number3 number4').text(numberToGuess);
    for (var i=0; i< number1.length; i++){
      var imageCrystal1 = $('<img>');
      
      imageCrystal1.attr('data-num', number1[i]);
      imageCrystal1.attr('src', 'http://img1.wikia.nocookie.net/__cb20110114234409/starcraftfanfiction/images/e/e8/Talram_Crystal.PNG');
      imageCrystal1.attr('alt', 'green crystal');
      imageCrystal1.addClass('crystalImage');
      $('#crystals').append(imageCrystal1);
    }

    for (var i=0; i< number2.length; i++){
      var imageCrystal2 = $('<img>');
      
      imageCrystal2.attr('data-num', number2[i]);
      imageCrystal2.attr('src', 'http://vignette3.wikia.nocookie.net/starcraftfanfiction/images/b/b8/Alliram.PNG/revision/latest?cb=20110114234131');
      imageCrystal2.attr('alt', 'blue crystal');
      imageCrystal2.addClass('crystalImage');
      $('#crystals').append(imageCrystal2);
    }

    for (var i=0; i< number3.length; i++){
      var imageCrystal3 = $('<img>');
      
      imageCrystal3.attr('data-num', number3[i]);
      imageCrystal3.attr('src', 'http://vignette1.wikia.nocookie.net/starcraftfanfiction/images/5/59/Temril_Crystal.PNG/revision/latest?cb=20110114234517');
      imageCrystal3.attr('alt', 'red crystal');
      imageCrystal3.addClass('crystalImage');
      $('#crystals').append(imageCrystal3);
    }

    for (var i=0; i< number4.length; i++){
      var imageCrystal4 = $('<img>');
      
      imageCrystal4.attr('data-num', number4[i]);
      imageCrystal4.attr('src', 'http://vignette3.wikia.nocookie.net/starcraftfanfiction/images/5/5b/Savraj_Crystal.PNG/revision/latest?cb=20110114234233');
      imageCrystal4.attr('alt', 'purple crystal');
      imageCrystal4.addClass('crystalImage');
      $('#crystals').append(imageCrystal4);
    }
    
    $('#reset').on('click', function(){
        reset();
    });

    function reset(){
      console.log("made it");
      counter = 0;      
      $('#yourNumber').text(counter);

      number1 = [5];
      number2 = [3];
      number3 = [7];
      number4 = [10];
      $('number1 number2 number3 number4').text(numberToGuess);
      console.log('Is it working');
    };

    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!');
        reset();
        console.log("try it");
      }else if( counter > numberToGuess){
        alert('You lost!');
        reset();
      }
    });
  
  });
</script>