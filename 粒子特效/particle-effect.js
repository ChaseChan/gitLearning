let particleEffect = {
    ctx:null,
    canvas:null,
    init() {
        let windowSize = Utils.getWindowSize();
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        if (this.ctx) {
            this.canvas.width = windowSize.width;
            this.canvas.height = windowSize.height;
        }
    }
};

let Utils = {
    getWindowSize() {
        return {
            width: this.getWindowWidth(),
            height: this.getWindowHeight()
        }
    },
    getWindowWidth() {
        return window.innerWidth || document.documentElement.clientWidth
    },
    getWindowHeight() {
        return window.innerHeight || document.documentElement.clientHeight
    }
};