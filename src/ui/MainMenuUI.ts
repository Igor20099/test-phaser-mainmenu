import Phaser from "phaser";
import Button from "../components/Button";
import { EventBus } from "../modules/EventBus";

class MainMenuUI extends Phaser.GameObjects.Container {
    constructor(scene:Phaser.Scene,x:number,y:number) {
        super(scene,x,y)
        const title = new Phaser.GameObjects.Text(scene,800/2,200,'Phaser Menu',{fontSize:'36px'}).setOrigin(0.5)
        const startBtn = new Button(scene,800/2,600/2,'Start Game').setOrigin(0.5)
        const exitBtn = new Button(scene,800/2,600/2 + 40,'Exit Game').setOrigin(0.5)
        this.add(title)

        startBtn.on('pointerdown', () => {
            EventBus.emit('startgame')
        })
      
        this.scene.add.existing(this) 
    }
}

export default MainMenuUI;