import Phaser from "phaser";

class Backgound extends Phaser.GameObjects.Sprite {
 constructor(scene:Phaser.Scene,x:number,y:number,image:string) {
    super(scene,x,y,image)
    this.scene.add.existing(this)
 }
}

export default Backgound;