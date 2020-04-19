// Vue main file

import {main} from './moduels'
import Vue from 'vue'
import Visualiser from './components/Visualiser.vue'
import BackgroundSlider from './components/BackgroundSlider.vue'

window.onload = () => {
    main()
}

// ----------------------use-section-------------------------------------------->

// ----------------------------------------------------------------------------->


// ----------------------component-section-------------------------------------->

Vue.component('visualiser', Visualiser);
Vue.component('bg-slider', BackgroundSlider);

// ----------------------------------------------------------------------------->


// ---------------------Main-instance-of-Vue------------------------------------>

const app = new Vue({
    el: '#app',

});

// -------------------------Instances-of-Vue------------------------------------>



// ----------------------------------------------------------------------------->





