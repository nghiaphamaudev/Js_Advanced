'use strict';
// Bài tập 1: Tạo Set và Thao tác
// Tạo một Set rỗng.
const emptySet = new Set();
// Thêm các phần tử 'apple', 'banana', 'orange' vào Set.
emptySet.add('apple').add('banana').add('orange');
// Kiểm tra xem 'banana' có tồn tại trong Set không.
console.log(emptySet.has('banana'));
// Xóa 'orange' khỏi Set.
emptySet.delete('orange');
// In ra tất cả các phần tử trong Set
console.log(emptySet);

// Tạo hai Sets, một Set chứa các số chẵn từ 1 đến 10 và một Set chứa các số nguyên tố từ 1 đến 10.
const evenSet = new Set([2, 4, 6, 8, 10]);
const primeSet = new Set([2, 3, 5, 7]);
// Tính tập hợp hợp (union) của hai Sets.
const unionSets = new Set([...evenSet, ...primeSet]);
console.log(unionSets);

// Tính tập hợp giao (intersection) của hai Sets.
const intersection = new Set([...evenSet].filter(x => primeSet.has(x)));
console.log(intersection);

// Tính tập hợp hiệu (difference) của hai Sets.
const difference = [...emptySet].filter(x => !primeSet.has(x));
console.log(difference);

// Bài tập 3: Tạo Map và Thao tác
// Tạo một Map rỗng.
const emptyMap = new Map();
// Thêm các cặp key-value sau vào Map: 'name' - 'John', 'age' - 25, 'city' - 'New York'.
emptyMap.set('name', 'John').set('age', 25).set('city', 'New York');
// Lấy giá trị của key 'age'.
const age = emptyMap.get('age');
// Kiểm tra xem key 'gender' có tồn tại trong Map không.
const gender = emptyMap.has('gender');
// Xóa key 'city' khỏi Map.
emptyMap.delete('city');
// In ra tất cả các key và giá trị trong Map.
console.log(emptyMap);
// Bài tập 4: Duyệt qua Map
// Tạo một Map chứa thông tin của một danh sách học viên với key là tên và value là điểm số.
const inforStudent = new Map([
  ['Phạm Văn Nghĩa', 10],
  ['Phạm Văn Hòa', 9],
  ['John Terry', 8, 4],
  ['Frank Lampard', 8],
  ['Waye Ronney', 9],
]);
// Sử dụng vòng lặp để in ra tất cả các học viên và điểm số của họ.
for (const [keys, values] of inforStudent) {
  console.log(`${keys} : ${values}`);
}
