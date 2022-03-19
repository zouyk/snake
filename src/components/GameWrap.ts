class GameWrap {
    ele: HTMLElement
    width: number;
    height: number;
    constructor() {
        this.ele = document.getElementById('main')!
        this.width = this.ele.clientWidth
        this.height = this.ele.clientWidth
    }
}

export default GameWrap