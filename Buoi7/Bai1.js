//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

function countNumber(a) {
    a.sort();
    let count = 1;
    for(let i = 0;i<a.length; i++){
        if(a[i] == a[i+1])
        count++;
        else {
            console.log(`phan tu ${a[i]} xuat hien ${count} lan`);
            count = 1;
        }
    }
}
console.log("Case 1");
countNumber(nums);
console.log("Case 2");
countNumber(nums1);
console.log("Case 3");
countNumber(nums2);
