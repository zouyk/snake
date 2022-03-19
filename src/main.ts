import '@/style/index.less'
import '@/style/common.less'
import ControlTool from '@/components/ControlTool'

const  geme =  new ControlTool()
document.getElementById('button')?.addEventListener('click',geme.gemeInit.bind(geme))
document.getElementById('game-over-agin')?.addEventListener('click',geme.aginGame.bind(geme))
document.getElementById('game-over-out')?.addEventListener('click',geme.outGame.bind(geme))
