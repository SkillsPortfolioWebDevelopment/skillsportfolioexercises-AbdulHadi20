function result() {
    var score = 0;

    if (document.getElementById('r1').checked) {
        score++;
    }

    if (document.getElementById('r2').checked) {
        score++;
    }

    if (document.getElementById('r3').checked) {
        score++;
    }

    if (score == 3) {
        document.write("Your score is " + score + "3/3. Excellent");
    }

    if (score == 2) {
        document.write("Your score is " + score + "Good work 2/3");
    }

    if (score == 1) {
        document.write("Your score is " + score + "Better luck next time 1/3");
    }

    if (score == 0) {
        document.write("Your score is " + score + "Please study harder 0/3");
    }

}