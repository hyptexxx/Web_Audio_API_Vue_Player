<template>
    <div>
        <canvas id="canvas"></canvas>
        <audio controls id="audioNodeElementSource" style="position: absolute; top: -100px;">
            <source src="audio/5.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
    export default {
        name: "Visualizer",
        data() {
            return {
                audioCTX: null,
                audioNodeElementSource: null,
                analyser: null,
                frequencyData: null,
                canvas: null,
                canvasCTX: null
            }
        },
        mounted() {
            try {
                this.audioCTX = new AudioContext()
            } catch (e) {
                console.log('Your browser do not support audio API')
            }
            this.initAudioElementSource()
            this.initCanvasAndCanvasCTX()
            this.initAnalyser()
            this.connectNodes()
            this.initFrequencyData()
            this.startAnalyseAndDraw()
        },
        methods: {
            initAudioElementSource: function () {
                this.audioNodeElementSource = document.getElementById('audioNodeElementSource')
                this.audioNodeElementSource = this.audioCTX.createMediaElementSource(this.audioNodeElementSource)
            },
            initCanvasAndCanvasCTX: function () {
                this.canvas = document.getElementById('canvas')
                this.canvasCTX = this.canvas.getContext('2d')
                this.canvasCTX.clearRect(0, 0, 100, 100)
            },
            initAnalyser: function () {
                this.analyser = this.audioCTX.createAnalyser()
            },
            connectNodes: function () {
                this.audioNodeElementSource.connect(this.analyser)
                this.analyser.connect(this.audioCTX.destination)
            },
            initFrequencyData: function () {
                this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount)
            },
            startAnalyseAndDraw: function () {
                requestAnimationFrame(this.startAnalyseAndDraw)
                this.analyser.getByteFrequencyData(this.frequencyData)
                let x = 0
                let barWidth = (700 / this.analyser.frequencyBinCount * 3.4)
                let barHeight
                this.canvasCTX.clearRect(0, 0, 3000, 200)
                for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
                    barHeight = this.frequencyData[i] / 0.9
                    this.canvasCTX.fillRect(x, 150 - barHeight / 2, barWidth, barHeight)
                    this.canvasCTX.fillStyle = 'rgba(255,255,255,.7)'
                    x += barWidth + 1;
                }
            }
        },
    }
</script>