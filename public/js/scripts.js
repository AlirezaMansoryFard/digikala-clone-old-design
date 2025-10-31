//! Footer Scripts

$(".footer__content-more").click(function () {
  let moreInfo = $(".footer__content-info");
  if (moreInfo.css("max-height") === "max-content") {
    moreInfo.css("max-height", "14rem");
    $(this).text(" مشاهده بیشتر ");
  } else {
    moreInfo.css("max-height", "max-content");
    $(this).text(" بستن ");
  }
});
