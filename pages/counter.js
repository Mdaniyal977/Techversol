$(document).ready(function () {
    $('.counter').each(function () {
        var $this = $(this);
        var target = $this.data('target');
        $({ countNum: $this.text() }).animate({
            countNum: target
        }, {
            duration: 2000,  // Adjust the duration as needed
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(target);
            }
        });
    });
});