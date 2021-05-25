var div1 = document.createElement('div');
div1.className = 'demo';

document.body.appendChild(div1);

var dragging = false;
var initialX;
var initialY;

div1.onmousedown = function (e) {
    initialX = e.clientX;
    initialY = e.clientY;
    
    dragging = true;
}

// 拖拽逻辑
document.onmousemove = function (e) {
    if (dragging === true) {
//         定义水平垂直分量
        var deltaX = e.clientX - initialX;
        var deltaY = e.clientY - initialY;
        
        var top = parseInt(div1.style.top) || 0;
        var left = parseInt(div1.style.left) || 0;
        
        div1.style.top = top + deltaY + 'px';
        div1.style.left = left + deltaX + 'px';
//         样式设置完毕，重新初始化水平垂直分量
        initialX = e.clientX;
        initialY = e.clientY;
    }
}

document.onmouseup = function () {
    dragging = false;
}

