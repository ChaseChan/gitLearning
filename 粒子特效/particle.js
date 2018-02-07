function Particle(info) {
    // 粒子属性
    this.x = info.x;           // 粒子的横坐标
    this.y = info.y;           // 粒子的纵坐标
    this.vx = info.vx;         // 粒子的横向运动速度  
    this.vy = info.vy;         // 粒子的纵向运动速度
    this.color = info.color;
    this.scale = info.scale;
    this.radius = info.radius;

    // 绘制方法
    if (typeof Particle.prototype.draw === 'undefined') {
        Particle.prototype.draw = function(ctx) {
            // 画圆方法
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.arc(this.x,this.y,this.radius * this.scale, 2*Math.PI,false);
            ctx.closePath();
            ctx.fill();
        }
    }
}