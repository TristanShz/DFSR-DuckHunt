export default class Sound {
  constructor() {
    this.intro = document.createElement("audio");
    this.intro.src = "/assets/sounds/intro.mp3";
    this.intro.setAttribute("preload", "auto");
    this.intro.setAttribute("controls", "none");

    this.gunshot = document.createElement("audio");
    this.gunshot.src = "/assets/sounds/gunshot.mp3";
    this.gunshot.setAttribute("preload", "auto");
    this.gunshot.setAttribute("controls", "none");
  }

  play(sound) {
    sound.play();
  }
}
