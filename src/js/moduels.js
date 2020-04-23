import {canvasTrigger} from '../js/modules/example/triggers/canvasResizeTrigger'
import {initListeners} from '../js/modules/example/listeners/listeners'

let main = () => {
    canvasTrigger()
    initListeners()
}

export {main}