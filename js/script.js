$(".testimonial__slider").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                centerPadding: '50px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '30px',
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                centerPadding: '0',
            }
        }
    ]
})