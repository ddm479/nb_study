interface User {
    name: string
    social? :{
        facebook: boolean
        twitter: boolean
    }
}

let user: User
user = { name: 'hana', social: {facebook: true, twitter: true}}

// optional chaining
console.log(user.social?.facebook) // == console.log(user.social && user.social.facebook 자동으로 변환)

// console.log(user.social.facebook) // 불가능, social에 null이 오면 에러나기 때문에