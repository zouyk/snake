import GameWrap from './GameWrap'
//食物
class Food {
    element: HTMLElement
    gameWrap: GameWrap
    BASE_NUM: number
    constructor(BASE_NUM: number = 10) {
        this.element = document.getElementById('food')!
        this.gameWrap = new GameWrap()
        this.BASE_NUM = BASE_NUM
    }
    //食物X坐标
    get X() {
        return Math.floor(this.element.offsetLeft / this.BASE_NUM)
    }
    //食物Y坐标
    get Y() {
        return Math.floor(this.element.offsetTop / this.BASE_NUM)
    }
    //刷新食物
    change() {
        //随机生成食物
        const getRandom = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min) + min)
        }
        this.element.style.left = getRandom(0, this.gameWrap.width / this.BASE_NUM) * this.BASE_NUM + 'px'
        this.element.style.top = getRandom(0, this.gameWrap.height / this.BASE_NUM) * this.BASE_NUM + 'px'
    }

}
export default Food