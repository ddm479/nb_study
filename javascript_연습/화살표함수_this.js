var relationship1 = {
    name: "zero",
    friends: ["nero", "hero", "xero"],
    logFriends() {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

var relationship2 = {
    name: "zero",
    friends: ["nero", "hero", "xero"],
    logFriends() {
        this.friends.forEach((friend) => {
            console.log(this.name, friend);
        }); // 화살표함수를 사용하면 바깥 스코프인 logFriends()의 this를 그대로 사용할 수 있다 -> 상위 스코프의 this를 그대로 물려받는다
    },
};
relationship2.logFriends();

(function () {
    console.log(this);
})();

(() => {
    console.log(this);
})(); // {}