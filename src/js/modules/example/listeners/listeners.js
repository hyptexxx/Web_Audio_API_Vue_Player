import {playButtonClick} from '../listeners/listenerNodes/clickListeners'

let initListeners =  () => {
    document.getElementsByClassName("page-user-player-controls-song-button-play")[0]
        .addEventListener("click", playButtonClick)
}

export {
    initListeners
}