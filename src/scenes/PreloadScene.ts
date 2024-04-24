import { Scene } from "phaser";

class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

   preload() {
    this.load.image('bg','./sprites/image.png')
   }
  create() {
  
    this.scene.start("MainMenu");
  }
}

export default PreloadScene;
