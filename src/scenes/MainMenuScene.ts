import { Scene } from "phaser";
import MainMenuUI from "../ui/MainMenuUI";
import { EventBus } from "../modules/EventBus";
import Backgound from "../components/Background";



class MainMenuScene extends Scene {
    constructor() {
        super('MainMenu')
        EventBus.on('startgame', () => {
            this.scene.start('MainScene')
        })
        
    }

    create() {
      new Backgound(this,0,0,'bg').setScale(2)
      new MainMenuUI(this,0,0)
    }
   
}

export default MainMenuScene;