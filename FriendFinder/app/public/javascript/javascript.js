$(document).ready(function() {
    var selectedGender;
    // var audio = document.getElementById("onLoad");
    // var effect = document.getElementById("effect");
    // var hover = document.getElementById("hover");
    // var first = document.getElementById("first");
    // var second = document.getElementById("second");

    // audio.volume = 0.2;
    $("#onLoad").prop("volume", 0.2);

    // function fade() {
    //     fadeGenderChoice();
    // }

    function fadeGenderChoice() {
        //begin fade in and out of first question
        // Show question div
        $("#first").fadeIn(2000).removeClass('hiddenfirst');
        // Show cards div
        $("#second").fadeIn(5000).removeClass('hiddenfirst');

        // Hide question div
        $("#first").fadeOut(1000, function() {
            // Show first question
            $(this).html("<h1>Lord or Lady?</h1>").fadeIn(1000);
            // fadeGenderCards();

            // Show first set of cards
            $("#second").fadeOut(1000, function() {
                $(this).html("<img id = 'male' class='gender' data-gender='male' src = 'images/male.jpg'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <img id = 'female' class='gender' data-gender='female' src = 'images/female.png'>").fadeIn(1000);
                // Enable hover effect
                hoverEffect();
            });
        });
    }

    // Select gender
    $(document).on("click", ".gender", function() {
        selectedGender = $(this).data("gender");
        if(selectedGender === "female") {
            console.log("You are a pretty woman");
            $("#male").fadeOut(2000);
        } else if (selectedGender === "male") {
            console.log("You are a handsome man");
            $("#female").fadeOut(2000);
        }

        // Hide question div
        $("#first").fadeOut(8000,function() {
            // Show second question
            $(this).html("<h1>Lord or Lady?</h1>").fadeIn(3000);
            // Show second set of cards
            $("#second").fadeOut(5000, function() {
                $(this).html("<img id = 'male' class='genderPref' data-gender='male' src = 'images/male_2.png'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <img id = 'female' class='genderPref' data-gender='female' src = 'images/female_2.png'>").fadeIn(5000);
                hoverEffect();
            });
        });

        // var userGender = {
        // 	gender: selectedGender
        // };
        // var currentURL = window.location.origin;
        // $.post(currentURL + "/gender", userGender, function(data) {
        // });
    });

    // Select gender preference
    $(document).on("click", ".genderPref", function() {
        selectedGender = $(this).data("gender");
        if(selectedGender === "female") {
            console.log("You chose female");
        } else if (selectedGender === "male") {
            console.log("You chose male");
        }
    });

    function moveForward() {
        $("#first").fadeOut(8000, function() {
            $(this).html().fadeIn(3000);
            forwardButton();
        });
    }

    function forwardButton() {
        $("#second").fadeOut(5000, function() {
            $(this).html("text").fadeIn(5000);
        });
        return;
    }

    function transitionPage() {
        moveForward();
    }

    // creating the hover function
    function hoverEffect() {
        //play the card loading sound
        $("#effect").get(0).play();
        //play the hover sounds for guy and girl
        $("#male, #female").mouseenter(function() {
            console.log("this works");
            $("#hover").get(0).play();
        });

        $("#male, #female").mouseleave(function() {
            $("#hover").get(0).pause();
            hover.currentTime = 0;
        });
    }

    function onStart() {
        //play music
        $("#onLoad").get(0).play();

        fadeGenderChoice();
    }

    onStart();
});
