/* 1. DESTRUCTORING
const obj1 = {
  id: 1,
  name: "Chu Tuan Phuong",
  email: "ctuanphuong@gmail.com",
};
// destructoring obj1
const { id, name, email } = obj1;
console.log(id, name, email);
// giống kiểu:
//  const id = newObj1.id
// const name = newObj1.name
const age = 20;
const newOb1 = { id, name, email, age, address: "Bac Tu Liem, Ha Noi" };
console.log(newOb1);
*/

/* 2.  SPREAD OPERATOR ~ dấu ...
const obj2 = {
  id: 1,
  name: "Phuong",
  email: "ctuanphuong@gmail.com",
  gender: 1,
  status: 1,
};
// Sinh ra 1 obj giống như obj2 và cũng có thể bổ sung 1 vài giá trị khác
const newObj2 = { ...obj2, fullName: "Chu Tuan Phuong" };
console.log("newOBj2: ", newObj2);

const arr2 = [
  {
    id: 1,
    name: "Phuong",
  },
  {
    id: 2,
    name: "Tuan",
  },
  {
    id: 3,
    name: "Ngoc",
  },
  {
    id: 4,
    name: "Luong",
  },
];
// Sinh ra 1 array giống như arr2 và cũng có thể bổ sung 1 vài phần tử khác
// const newArr2 = arr2 // không nên làm
// const newArr2 = [];
// for (let i = 0; i < arr2.length; i++) {
//   newArr2.push(arr2[i]);
// }
// newArr2.push({ id: 5, name: "Huy" });
// tối ưu nhất là dùng ...
const newArr2 = [{ id: 0, name: "Duc" }, ...arr2, { id: 5, name: "Huy" }];
console.log(newArr2);
*/

/** 3. HOẶC ||
const obj3 = { id: 1, name: "Phan 3 || " };
const nameValue3 = obj3.name; // output: "Phan 3 ||"
// const emailValue3 = obj3.email; // output: "undefined"
//Set giá trị mặc định nếu emailValue3 ko tồn tại
const emailValue3 = obj3.email || "Email not exist";
console.log(emailValue3);
 */

/** 4. Chaining Option ?.
const obj4 = undefined;
// const nameValue4 = obj4.name; // Lỗi toàn bộ vì đang lấy thuộc tính name từ undefined
const nameValue4 = obj4?.name; // Không lỗi nữa mà trả về kq là undefined
const nameValue42 = obj4?.name || "Name is not exist"; // Không lỗi nữa mà trả về kq là undefined
*/

/* 5. Object keys values
const obj5 = {
  id: 1,
  name: "Phuong",
  email: "ctuanphuong@gmail.com",
  gender: 1,
  status: 1,
};
console.log(Object.keys(obj5)); // Mảng chứa tất cả các chuỗi là key trong obj5
console.log(Object.values(obj5)); // Mảng chứa tất cả các giá trị trong obj5
*/

/** 6. TRING LENGTH, INDEXOF, TOUPPERCASE, TOLOWERCASE, TRIM, SPLIT, JOIN
const string6 = "  TUANNDA3@fpt.edu.vn      ";
string6.length; // lấy ra độ dài chuỗi 21
string6.indexOf("f"); //lấy ra vị trí xuất hiện đầu tiên của chuỗi trong chuỗi gốc 9
string6.indexOf("@fpt.edu.vn"); // lấy ra vị trí xuất hiện đầu tiên của chuỗi trong chuỗi gốc 8
string6.indexOf("@gmail.com"); // không tồn tại chuỗi @gmail.com trong chuỗi gốc, -1
// Tình huống đăng ký: user tạo email là '  tuannda3@FPT.edu.vn     '
// Tình huống đăng nhập: user nhập email là 'tuannda3@fpt.edu.vn'
// Cách giải quyết: khi tạo mới cần đưa toàn bộ chuỗi về chữ in thường, cắt toàn bộ khoảng trắng
string6.toLowerCase().trim();
string6.split("@"); // Tách chuỗi thành mảng dựa vào chuỗi phân tách là @
string6.split("@");
// join('@@@@') gộp mảng thành chuỗi dựa vào chuỗi ghép nối
*/

/* 7. FUNCTION CÓ DEFAULT VALUE TRÊN THAM SỐ
const sum = (a = 0, b = 0) => a + b;
sum(2, 3);
sum(10);
*/

/* 8. ARRAY MAP. FILTER, FIND
const arr8 = [1, 2, 3, 4, 5, 6];
const newArr8 = [];
for (let i = 0; i < arr8.length; i++) {
  newArr8.push(arr8[i] + 1);
}
// map sinh ra 1 mảng mới có cấu trúc giống mảng cũ nhưng có thể thao tác để chỉnh sửa kết quả trả về nếu muốn
const newArrMap81 = arr8.map((item) => item + 1);
const newArrMap82 = arr8.map((item) => (item % 2 == 0 ? item + 2 : item + 1));
const newArrMap823 = arr8.map((item) => {
  if (item % 2 == 0) {
    return item + 2;
  }
  return item + 1;
});

// filter sinh ra 1 mảng mới loại bỏ những phần tử không phù hợp điều kiện đưa ra
const newFilter8 = arr8.filter((item) => item % 2 == 0); // [2, 4, 6];

// find lấy ra giá trị của phần tử tìm được theo điều kiện
const newItem8 = arr2.find((item) => item.id == 2); // {id: 2, name: 2}
*/
