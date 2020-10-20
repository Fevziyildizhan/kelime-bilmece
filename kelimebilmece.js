<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kelime bilmece</title>
</head>
<body onload="startUp()">
    
    <h1>KELİME BİLMECE</h1>
    <input type="text" id="letter">
    <input type="button" value="letter" onclick="letter()">
    <p id="answer"></p>
    <p id="counter"></p>
    <p id="stat"></p>

    <script type="text/javascript">
    
    var randomWordArr = ['telefon','televizyon','bilgisayar','dolap','priz','bisiklet','apartman','terzi','terazi','okul','araba']
    var randomWord = randomWordArr[Math.floor(Math.random()*randomWordArr.length)]

    var s;
    var count = 0;
    var answerArray = []

    function startUp(){

        for(let i = 0; i<randomWord.length; i++){
             answerArray[i] = ' _ '
        }

        s = answerArray.join(' ')
        document.getElementById('answer').innerHTML = s
    }



    function letter(){
        var letter = document.getElementById('letter').value


        if(letter.length > 0){
            for( let i = 0; i<randomWord.length; i++){
                if(randomWord[i] === letter){
                    answerArray[i] = letter;

                }
            }
            count++
            document.getElementById('counter').innerHTML = 'Tıklama yok '+ count
            document.getElementById('answer').innerHTML = answerArray.join(" ")
        }
        if(count > 7){
            document.getElementById('stat').innerHTML = 'Şimdiye kadar tahmin etmen gerekiyordu'
        }else if(count >=6 && count == 0){
            document.getElementById('stat').innerHTML = 'BRAVO'
        }
            
            
        
        
        
      
    }
    </script>
</body>
</html>
