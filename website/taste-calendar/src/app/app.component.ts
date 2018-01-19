import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  changeImage(currentImage, visualisation, gif, audioFile) {
    if (currentImage === visualisation) {
      currentImage = gif;
      var audio = new Audio();
      audio.src = audioFile;
      audio.load();
      audio.play();
    }
  }

  adrianaVis = "assets/vis/s-01.png";
  adrianaGif = "assets/gif/adrianna.gif";
  adrianaAudio = "assets/audio/adriana.wav";
  adriana = this.adrianaVis;
  adrianaClicked() {
    this.changeImage(
      this.adriana,
      this.adrianaVis,
      this.adrianaGif,
      this.adrianaAudio
    );
    this.adriana =
      this.adriana === this.adrianaVis ? this.adrianaGif : this.adrianaVis;
  }

  joannaVis = "assets/vis/s-02.png";
  joannaGif = "assets/gif/joanna.gif";
  joannaAudio = "assets/audio/joanna.wav";
  joanna = this.joannaVis;
  joannaClicked() {
    this.changeImage(
      this.joanna,
      this.joannaVis,
      this.joannaGif,
      this.joannaAudio
    );
    this.joanna =
      this.joanna === this.joannaVis ? this.joannaGif : this.joannaVis;
  }

  karinnaVis = "assets/vis/s-03.png";
  karinnaGif = "assets/gif/karinna.gif";
  karinnaAudio = "assets/audio/karinna.wav";
  karinna = this.karinnaVis;
  karinnaClicked() {
    this.changeImage(
      this.karinna,
      this.karinnaVis,
      this.karinnaGif,
      this.karinnaAudio
    );
    this.karinna =
      this.karinna === this.karinnaVis ? this.karinnaGif : this.karinnaVis;
  }

  chiragVis = "assets/vis/s-04.png";
  chiragGif = "assets/gif/chirag.gif";
  chiragAudio = "assets/audio/Chirag.wav";
  chirag = this.chiragVis;
  chiragClicked() {
    this.changeImage(
      this.chirag,
      this.chiragVis,
      this.chiragGif,
      this.chiragAudio
    );
    this.chirag =
      this.chirag === this.chiragVis ? this.chiragGif : this.chiragVis;
  }

  samVis = "assets/vis/s-05.png";
  samGif = "assets/gif/sam.gif";
  samAudio = "assets/audio/Sam.wav";
  sam = this.samVis;
  samClicked() {
    this.changeImage(this.sam, this.samVis, this.samGif, this.samAudio);
    this.sam = this.sam === this.samVis ? this.samGif : this.samVis;
  }

  ainaraVis = "assets/vis/s-06.png";
  ainaraGif = "assets/gif/ainara.gif";
  ainaraAudio = "assets/audio/Ainara.wav";
  ainara = this.ainaraVis;
  ainaraClicked() {
    this.changeImage(
      this.ainara,
      this.ainaraVis,
      this.ainaraGif,
      this.ainaraAudio
    );
    this.ainara =
      this.ainara === this.ainaraVis ? this.ainaraGif : this.ainaraVis;
  }

  anaVis = "assets/vis/s-07.png";
  anaGif = "assets/gif/ana.gif";
  anaAudio = "assets/audio/Ana.wav";
  ana = this.anaVis;
  anaClicked() {
    this.changeImage(this.ana, this.anaVis, this.anaGif, this.anaAudio);
    this.ana = this.ana === this.anaVis ? this.anaGif : this.anaVis;
  }

  russellVis = "assets/vis/s-08.png";
  russellGif = "assets/gif/russell.gif";
  russellAudio = "assets/audio/Russell.wav";
  russell = this.russellVis;
  russellClicked() {
    this.changeImage(
      this.russell,
      this.russellVis,
      this.russellGif,
      this.russellAudio
    );
    this.russell =
      this.russell === this.russellVis ? this.russellGif : this.russellVis;
  }

  miguelVis = "assets/vis/s-09.png";
  miguelGif = "assets/gif/miguel.gif";
  miguelAudio = "assets/audio/miguel.wav";
  miguel = this.miguelVis;
  miguelClicked() {
    this.changeImage(
      this.miguel,
      this.miguelVis,
      this.miguelGif,
      this.miguelAudio
    );
    this.miguel =
      this.miguel === this.miguelVis ? this.miguelGif : this.miguelVis;
  }

  mattVis = "assets/vis/s-10.png";
  mattGif = "assets/gif/matt.gif";
  mattAudio = "assets/audio/Matt.wav";
  matt = this.mattVis;
  mattClicked() {
    this.changeImage(this.matt, this.mattVis, this.mattGif, this.mattAudio);
    this.matt = this.matt === this.mattVis ? this.mattGif : this.mattVis;
  }

  jonathanVis = "assets/vis/s-11.png";
  jonathanGif = "assets/gif/jonathan.gif";
  jonathanAudio = "assets/audio/Jonathan.wav";
  jonathan = this.jonathanVis;
  jonathanClicked() {
    this.changeImage(
      this.jonathan,
      this.jonathanVis,
      this.jonathanGif,
      this.jonathanAudio
    );
    this.jonathan =
      this.jonathan === this.jonathanVis ? this.jonathanGif : this.jonathanVis;
  }
}
