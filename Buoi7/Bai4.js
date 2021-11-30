const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
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
SearchPhone(textPhone);