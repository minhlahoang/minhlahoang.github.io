const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];

function showUsers(){
  console.log("Thong tin nguoi dung : ");
  console.log(users);
}

const Users01 = {id: 10, name: "Hoang", age:19, gender: "male", money:3000}
function addUsers(Users01){
  users.push(Users01);
}

addUsers(Users01);
console.log("Thong tin sau khi them");
showUsers();

function deleteUser(id){
  for(let i=0; i<users.length; i++){
      if(users[i].id===10){
          users.splice(i, 1);
      }
  }
}
deleteUser();
console.log("Thong tin sau khi xoa ");
showUsers();

const Users2 = {id: 4, name:"Xuan Hoang" , age: 20, gender: "male", money:1505}
function updateUsersbyId(updateUser){
  for( let i = 0; i<users.length; i++){
    if(users[i].id == updateUser.id ){
      users[i] = Users2;
    }
  }
}
updateUsersbyId(Users2);
console.log("Thong tin sau khi cap nhat: ");
showUsers();

const addUsers1 ={id: 7, name:"Hoàng nè", age: 18, gender: "female", money: 1412 }
const addUsers2 ={id: 6, name:"dxh4402", age: 25, gender:"female", money: 3201}
addUsers(addUsers1);
addUsers(addUsers2);

function countGender(){
  let count = 0;
  for(let i =0 ; i < users.length; i++){
    if(users[i].gender === "male"){
      count++;
    }
  }
  console.log(`Tong nguoi co gioi tinh nam la ${count}`);
}
countGender();

function countAge(){
  let count = 0;
  for(let i =0 ; i < users.length; i++){
    if(users[i].age > 15){
      count++;
    }
  }
  console.log(`Tong nguoi co tuoi lon hon 15 la ${count}`);
}
countAge();
function sumMoneybyId(){
  let sum= 0;
  for(let i =0 ; i< users.length; i++){
    if(users[i].id % 2 == 0){
      sum += users[i].money;
    }
  }
  console.log(`Tong tien nguoi dung co id chan la : ${sum}`);
}
sumMoneybyId();
function maxminMoney(){
  let moneyMax = moneyMin = users[0].money;
  let userMax = userMin = 0;
  for( let i =0 ; i< users.length; i++){
    if(users[i].money > moneyMax){
      moneyMax = users[i].money;
        userMax = i;
    }
    if(users[i].money < moneyMin){
      moneyMin = users[i].money;
        userMin = i;
    }
  }
  console.log(`Nguoi giau nhat`);
  console.log(users[userMax]);
  console.log(`Nguoi ngheo nhat`);
  console.log(users[userMin]);
}
maxminMoney(users);

function changeGender(){
  for( let i =0 ; i< users.length ;i++){
    if(users[i].gender === "male"){
      users[i].gender = "female";
    }
  }
}
changeGender();
console.log("Thong tin sau khi chuyen doi");
showUsers();