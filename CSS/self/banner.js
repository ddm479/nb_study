// 버튼 클릭 시 배너 사라지는 효과구현 방법
// 방법 1
// document.getElementById("close-btn").addEventListener("click", function () {
//     var banner = document.getElementById("banner");
//     banner.style.display = "none";  // 배너를 숨깁니다.
// });


// 방법 2
// document.getElementById("close-btn").addEventListener("click", function () {
//     var banner = document.getElementById("banner");
//     banner.style.transform = "translateY(-100%)";  // 위로 슬라이드 아웃
//     banner.style.opacity = "0";  // 투명도 0으로 설정 (배너가 보이지 않게)
// });


// 방법 3
document.getElementById("close-btn").addEventListener("click", function () {
    var banner = document.getElementById("banner");
    banner.style.transform = "translateY(-100%)";
    banner.style.opacity = "0";

    // 애니메이션이 끝난 후 배너를 display: none으로 설정
    setTimeout(function () {
        banner.style.display = "none";  // 배너를 완전히 숨김
    }, 300); // 애니메이션 시간 (0.3초) 이후에 실행
});