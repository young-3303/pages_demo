(function () {
    var flag1 = window.confirm('你喜欢我吗？喜欢点确定，不喜欢点取消')
    if (!flag1) {
       var flag2 = window.confirm('真的不喜欢吗？喜欢点确定，不喜欢点取消')
        if (!flag2) {
            window.alert('好啦，不管喜欢不喜欢都给你看')
        }
    }
    let canvas = document.getElementById('pinkboard')
    let player = document.getElementById('players')
    canvas.style.opacity = '1'
    player.play()
})()
