
$(".slide-items").slick({
  autoplay: true,
  centerMode: true,
  centerPadding: "100px",
  infinite: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slideToScroll: 1,

  arrows: true,
  dots: true,

  dotsClass: "dots-class" //ここでclass名を変更する（デフォルトはslick-dots）
});

$(function () {
    // ハンバーガーメニューをクリックした時
    $(".hamburger").on("click", function () {
      $("header").toggleClass("open");
    });
    // ヘッダーに対してopenクラスを付与
    // openクラスがついているときはopenクラスを削除
    // toggleClassメソッドはその両方を行う
  });


// ＝＝＝＝＝＝＝＝
// modal
// ＝＝＝＝＝＝＝＝
const modalBtns = document.querySelectorAll(".modal-toggle");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};