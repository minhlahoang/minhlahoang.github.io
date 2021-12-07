/*Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
case1
Input: str = "tranduong"
Output: 0
case2
Input: str = "hitclubhiuhiu"
Output: 2
case3
Input: str = "aabb"
Output: -1
*/
const str1 = "tranduong"

const str2 = "hitclubhiuhiu"

const str3 = "aabb"

function Find(str){
  for (let i in str){
    if (str.indexOf(str[i]) ==i && str.lastIndexOf(str[i])==i)
      return i;
  }
  return -1;
}
console.log(Find(str1));
console.log(Find(str2));
console.log(Find(str3));