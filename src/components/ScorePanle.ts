//记分牌
class ScorePanle {
    score: number //得分
    level: number //等级
    maxLevel: number //最大等级
    ruleLevel: number //升级规则
    scoreEle: HTMLElement //分数ele
    levelEle: HTMLElement //等级ele
    constructor(maxLevel: number = 10, ruleLeve: number = 5) {
        this.score = 0
        this.level = 1
        this.maxLevel = maxLevel
        this.ruleLevel = ruleLeve
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.init()
    }
    init() {
        this.score = 0
        this.level = 1
        this.scoreEle.innerHTML = this.score + ''
        this.levelEle.innerHTML = this.level + ''
    }
    //加分方法
    changeScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if (this.score % this.ruleLevel === 0) {
            this.upLevel()
        }
    }
    //升级方法
    upLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanle