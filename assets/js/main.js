$(function () {
    var slideAdvanceDelay = 6000;
    var animationDelay = 400;
    var imagePath = 'assets/img/';

    var currentSlide = 1;
    var slides = [
        {
            sectionBackgroundColor: '#1F231D',
            screenshot: 'screen-1.png',
            overlayImage: 'background-1.jpg',
            bodyAnimationBackgroundColor: '#2B3328',
            opacity: 0.09
        },
        {
            sectionBackgroundColor: '#201520',
            screenshot: 'screen-2.png',
            overlayImage: 'background-2.jpg',
            bodyAnimationBackgroundColor: '#201520',
            opacity: 0.5
        },
        {
            sectionBackgroundColor: '#785A19',
            screenshot: 'screen-3.png',
            overlayImage: 'background-3.jpg',
            bodyAnimationBackgroundColor: '#785A19',
            opacity: 0.2
        }
    ];

    function advanceSlide() {
        var slide = slides[currentSlide];
        $('.section-main').css('background', slide.backgroundColor);
        $('.screenshot').fadeOut(animationDelay, function () {
            $('.screenshot').css('background', 'url(' + imagePath + slide.screenshot + ') top left / cover no-repeat');
        }).fadeIn(animationDelay);
        $('body').animate({ backgroundColor: slide.bodyAnimationBackgroundColor }, 'fast');
        $('.overlay').fadeTo('slow', 0.0, function () {
            $('.overlay').css('background', 'url(' + imagePath + slide.overlayImage + ') 0 50% / cover no-repeat');
        }).fadeTo('slow', slide.opacity);
        currentSlide++;
        if (currentSlide > slides.length - 1) {
            currentSlide = 0;
        }
    }

    setTimeout(function(){
        $('.js-bottom-notice').addClass('bottom0');
    }, 350);

    setInterval(advanceSlide, slideAdvanceDelay);
});