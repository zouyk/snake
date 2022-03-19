import GameWrap from './GameWrap'
//蛇
class Snake {
    gameWrap: GameWrap;
    head: HTMLElement;//蛇头
    bodis: HTMLCollection//身体
    element: HTMLElement;//容器
    BASE_STEP: number;
    constructor(BASE_STEP: number = 10) {
        this.gameWrap = new GameWrap()
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodis = document.getElementById('snake')!.getElementsByTagName('div')
        this.element = document.getElementById('snake')!
        this.BASE_STEP = BASE_STEP
    }

    get X() {
        return Math.floor(this.head.offsetLeft / this.BASE_STEP)
    }
    get Y() {
        return Math.floor(this.head.offsetTop / this.BASE_STEP)
    }

    set X(val) {
        console.log(val)
        //撞墙判断
        if (val < 0 || val === this.gameWrap.width / this.BASE_STEP) {
            throw new Error('撞墙了')
        }

        if (this.bodis[1] && (this.bodis[1] as HTMLElement).offsetLeft / this.BASE_STEP === val) {
            if (val > this.X) {//向右    
                val = this.X - 1
            } else {//向左                
                val = this.X + 1
            }
        }

        this.checkBody()
        this.movebodis()
        this.head.style.left = val * this.BASE_STEP + 'px'
    }
    set Y(val) {
        console.log(val)
        if (val < 0 || val === this.gameWrap.height / this.BASE_STEP) {
            throw new Error('撞墙了')
        }
        if (this.bodis[1] && (this.bodis[1] as HTMLElement).offsetTop / this.BASE_STEP === val) {
            console.log('垂直方向发生了掉头');
            if (val > this.Y) {//上
                val = this.Y - 1
            } else {//向下
                val = this.Y + 1
            }
        }
        this.checkBody()
        this.movebodis()
        this.head.style.top = val * this.BASE_STEP + "px"

    }
    checkBody() {
        let bodis = this.bodis
        for (let i = (bodis.length - 1); i > 0; i--) {
            const dome = bodis[i] as HTMLElement
            if (dome.offsetLeft / this.BASE_STEP === this.X && dome.offsetTop / this.BASE_STEP === this.Y) {
                throw new Error('撞到了自己!')
            }

        }
    }
    addLength() {
        console.log(this.element)
        const div = document.createElement('div')
        this.element.insertAdjacentElement('beforeend', div)
        console.log(this.bodis);
        
    }
    movebodis() {
        let bodis = this.bodis
        for (let i = (bodis.length - 1); i > 0; i--) {
            let eleA = bodis[i] as HTMLElement,
                eleB = bodis[i - 1] as HTMLElement
            eleA.style.left = eleB.offsetLeft + 'px'
            eleA.style.top = eleB.offsetTop + 'px'
        }
    }
    init(){
       this.X = 0
       this.Y = 0 
       for(let i = (this.bodis.length - 1); i > 0; i--){
        this.element.removeChild(this.bodis[i])
       }

    }
}
export default Snake



