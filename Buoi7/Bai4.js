/*const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

function SearchEmail(str) {
    str = str.match(/[a-z0-9](\.?[a-z0-9]){8}@g(oogle)?mail\.com/g);
    console.log(str.toString());
}
SearchEmail(textEmail);
function SearchPhone(str) {
    str = str.match(/((09|03|07|08|05)+([0-9]{8}))/g);
    console.log(str.toString());
}
SearchPhone(textPhone);*/

// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd097915092111111dfjhdsjfhds0979120734";

// const regex = /(m[a-z]+@[a-z]+\.com)|(t[a-z]+@[a-z]+\.com)/g;
const regex = /[a-z]{9}@[a-z]+\.com/g;

// const regex = new RegExp(sajkldhfkasj)

// const emails = textEmail.match(/(m[\w]+@[\w]+\.com)|(t[\w]+@[\w]+\.com)/g);
const emails = textEmail.match(regex);
const phones = textPhone.match(/[0-9]{10}/g);
console.log(emails);
console.log(phones);