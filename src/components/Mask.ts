class Mask {
    element: HTMLElement
    overTabel: HTMLElement //结束积分板
    overLevelEle: HTMLElement //结束等级ele
    overScoreEle: HTMLElement//结束得分ele

    constructor() {
        this.element = document.getElementById('mask')!
        this.overTabel = document.getElementById('game-over')!
        this.overLevelEle = document.getElementById('over-level')!
        this.overScoreEle = document.getElementById('over-score')!
    }
    close() {
        this.element.style.display = 'none'
    }
    init() {
        this.element.style.display = 'block'
    }
    openOverTable(level: number, score: number) {
        this.overTabel.style.display = ''
        this.overLevelEle.innerHTML = level + ''
        this.overScoreEle.innerHTML = score + ''
    }
    closeOverTable() {
        this.overTabel.style.display = 'none'
    }
}

export default Mask