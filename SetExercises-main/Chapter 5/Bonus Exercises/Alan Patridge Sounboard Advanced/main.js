// creating a script to play the audios when clicked on buttons
//
window.addEventListener("load", () => {
    // creating constants for sounds, using .sound, as given to class in HTML file to audio tags
    const sounds = document.querySelectorAll(".sound");
    //using .layout div to select all divs in layout class
    const layout = document.querySelectorAll(".layout div");

    //making the buttons play the specific sounds when clicked on them
    layout.forEach((box, index) => {
        box.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});

//text-to-speech 

function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}