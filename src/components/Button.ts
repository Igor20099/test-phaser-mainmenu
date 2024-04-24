import Phaser from "phaser";

class Button extends Phaser.GameObjects.Text {
    constructor(scene:Phaser.Scene,x:number,y:number,text:string) {
        super(scene,x,y,text,{stroke:'#ffffff'})
        this.scene.add.existing(this)
        this.setInteractive();
        this.handleMouseOver()
          
    }

    private handleMouseOver() {
        this.on('pointerover', () => {
            this.setTint(0xff0000)
            
           })
           this.on('pointerout', () => {
            this.clearTint()
            
           })
    }

    
}

export default Button;