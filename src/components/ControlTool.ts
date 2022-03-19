import Food from "./Food";
import ScorePanle from "./ScorePanle";
import Snake from './Snake'
import Mask from './Mask'

//控制器
class ControlTool {
    food: Food;
    scorePanle: ScorePanle;
    snake: Snake;
    mask: Mask
    dirction: string;
    liveFalg: boolean;
    INIT_SPEED: number;
    ladderNum: number;
    constructor(INIT_SPEED: number = 300, ladderNum: number = 30, initDirection: string = 'ArrowRight') {
        this.food = new Food()
        this.scorePanle = new ScorePanle()
        this.snake = new Snake()
        this.mask = new Mask()
        this.dirction = initDirection
        this.INIT_SPEED = INIT_SPEED
        this.ladderNum = ladderNum
        this.liveFalg = false
    }

    gemeInit() {
        this.liveFalg = false
        this.dirction ='ArrowRight'
        this.mask.close()
        this.food.change()//初始化食物
        this.scorePanle.init()
        this.snake.init()
        this.startGame()
        document.addEventListener('keydown', this.keybordHender.bind(this))
    }
    keybordHender(event: KeyboardEvent) {
            this.dirction = event.key
    }
    startGame() {
        enum KEYNAME {
            UP = 'ArrowUp',
            DOWN = 'ArrowDown',
            RIGHT = 'ArrowRight',
            LEFT = 'ArrowLeft'
        }

        if (this.liveFalg) return
        console.log(this.dirction)
        try {
            switch (this.dirction) {
                case KEYNAME.UP: this.snake.Y--; break;
                case KEYNAME.DOWN: this.snake.Y++; break;
                case KEYNAME.RIGHT: this.snake.X++; break;
                case KEYNAME.LEFT: this.snake.X--; break;
            }
        } catch (e) {
            console.log(e)
            // 结束游戏
            this.gameOver()
        }
        //食物检测
        this.checkIsEat()

        setTimeout(this.startGame.bind(this), this.INIT_SPEED - (this.scorePanle.level - 1) * this.ladderNum)
    }
    checkIsEat() {
        if (this.snake.X === this.food.X && this.snake.Y == this.food.Y) {
            // debugger
            this.snake.addLength()
            this.food.change()
            this.scorePanle.changeScore()
        }
    }
    gameOver() {
        this.liveFalg = true
        this.mask.openOverTable(this.scorePanle.level, this.scorePanle.score)
    }
    //再来一次`
    aginGame() {
        console.log('再来一次')
        this.mask.closeOverTable()
        this.gemeInit()
    }
    //退出游戏
    outGame() {
        console.log('退出游戏')
        this.mask.closeOverTable()
        this.mask.init()
    }
}
export default ControlTool