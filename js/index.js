$(".rotate-btn").on("click", function()
{
    let flipCardInner = $(this).parent().parent().parent();
    $(flipCardInner).toggleClass("flip-card-reveal");
});