window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var leftPre = document.getElementById("leftPre");
    var rightPre = document.getElementById("rightPre");
    wrap.onmouseover = function () {
        animate(arrow, {"opacity":1})
    };

    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0})
    };

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];

    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    assign();

    leftPre.onclick = function () {
        if(flag) {
            flag = false;
            config.push(config.shift());
            assign();
        }
    };

    rightPre.onclick = function () {
        if(flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    };


    var flag = true;
}