
$(document).ready(function() {

    // <br> <img src='assets/images/seaOfTranquility.jpg' alt='Hint' height='150px' width='250px'>
    var qAndA = [
        {
        question: "Where would you find the Sea of Tranquility?",
        possibleAnswers: ["The Moon", "Venice", "Michigan", "Ontario"],
        correctAnswer: 0
        },
        {
        question: "What is someone who shoes horses called?",
        possibleAnswers: ["Hoofer", "Esquire", "Equestrian", "Farrier"],
        correctAnswer: 3
        },
        {
        question: "What item of clothing was named after its Scottish inventor?",
        possibleAnswers: ["Tartan", "Kilt", "Mackintosh", "Tunic"],
        correctAnswer: 2
        },
        {
        question: "What kind of weapon is a falchion?",
        possibleAnswers: ["A Slingshot", "A Sword", "An Axe", "A Gun"],
        correctAnswer: 1
        },
        {
        question: "Which word goes before vest, beans and quartet?",
        possibleAnswers: ["Star", "Object", "String", "Plausible"],
        correctAnswer: 2
        },
    ]

        var intervalId;
        var clockRunning = false;
        var time = 30;
    
        if (!clockRunning) {
            clearInterval(intervalId);
            $("button").on("click", function(){
                intervalId = setInterval(decrement, 1000);
            })
          }

        function decrement() {
            time--;
            $("#countDown").html(time);

            if (time === 0) {
                stopTime();
            }

            function stopTime() {
                clearInterval(intervalId);
                checkAnswers();
            }
        };



        qAndA.forEach( function(element, index) {
            let div = $("<div>")

            console.log(element.question)
            let eachQuestion = $("<section>").text(element.question);
            let eachAnswers = $("<section>").text(element.possibleAnswers);
            var form = $('<form>')
            element.possibleAnswers.forEach( function(el,i) {
                var radio = $('<input type="radio" name="question" data-ans="'+ i +'">').text(element.possibleAnswers);
                form.append(radio)
                console.log(el)
            })
            // element.
            eachAnswers.append(form)
            div.append( eachQuestion,eachAnswers)
            $("#wrapper").append(div)
            console.log(element.correctAnswer)    
        })



    });



   //todo list:
        //dynamic flow of questions and answers and ending

        ////////////////////////////

         // console.log(qAndA[0].question)
        // var form = $('<form>')
        // qAndA[i].possibleAnswers.forEach( function(element,index) {
        //     var radio = $('<input type="radio" name="question" data-ans="'+ index +'">')
        //     form.append(radio)
        //     console.log(element)
        // })
        // $("#answers").append(form)
        // console.log(qAndA[0].correctAnswer)



        ////////////////////////////
        //DIFFERENT THOUGHTS:
        

        // var query = qAndA.filter(obj => {
        //     return obj.question1 === "Where would you find the Sea of Tranquility?";
        //   })

        // // console.log(this);
        // // console.log($(this));
        // $("button").on("click", function(){
        //     $("#question").text(query);
        //     $("#answerDirections").html("Choose one:<br>");
        // });


        ////////////////////////

        //     if (target.is("click")) {
        //       target();
        //     }
        //   }
        //   $( "ul" ).click( handler ).find( "ul" ).hide();

        //     if (time == 0) {
        //     alert("")
        // };







    // function reset() {

    //     time = 0;
    //     $("#countDown").html("30");
      
    //   }