let array = [];
//Thêm số
function addNum() {
    const number = document.getElementById('number_input').value * 1;
    array.push(number);
    document.getElementById('result_addNumber').innerHTML = `Các số bạn đã chọn bao gồm: ${array}`;
}
//Tổng các số dương
function onTongSoDuong() {
    let tong = 0;
    for (let i = 0; i < array.length; i++) {
        number = array[i]
        if (number % 2 === 0) {
            tong += number;
        }
    }
    document.getElementById('result_TongSoDuong').innerHTML = `Tổng các số dương trong dãy là: ${tong}`;
}
// Đếm số dương
function countSoDuong() {
    let count = 0;
    let content = ''
    for (let i = 0; i < array.length; i++) {
        number = array[i];
        if (number % 2 === 0) {

            content += number + ' ';
            count += 1;
        }
    }
    document.getElementById('dem_soduong').innerHTML = `
    Có ${count} số dương trong dãy, đó là: ${content}
   `
}
// Tìm số nhỏ nhất
function minNumber() {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        number = array[i]
        if (number < min) {
            min = number;
        }
    }
    document.getElementById('result_minNumber').innerHTML = `Số nhỏ nhất trong dãy là: ${min}`
}
// Tìm số dương nhỏ nhất
function minSoDuong() {
    let soDuong_array = [];
    //Lấy ra các số dương và đẩy vào mảng mới
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            soDuong_array.push(array[i]);
        }
    }

    let result = '';
    //Không có số dương = Không có phần tử nào trong mảng
    if (soDuong_array.length === 0) {
        result = 'Không có bất kì số dương nào trong dãy'
    } else {
        let min = soDuong_array[0];
        //let j = 1 vì đã gán min cho index 0;
        for (let j = 1; j < soDuong_array.length; j++) {
            if (soDuong_array[j] < min) {
                min = soDuong_array[j]
            }
            result = `Số dương nhỏ nhất là: ${min}`
        }
    }
    document.getElementById('result_minSoDuong').innerHTML = result  
}
// Tìm số chẳn cuối cùng. Không có chẳn, trả về -1
function theLastChan() {

}







// Tìm số chẳn cuối cùng. Không có chẳn, trả về -1
// Đổi chổ 2 giá trị trong mảng. Cho nhập vào 2 vị trí muốn đổi
// Sắp xếp mảng theo thứ tự tăng dần
// Tìm số nguyên tố đầu tiên. Không có, trả về -1
// Nhập thêm 1 mảng số thực. Tìm xem mảng đó có bao nhiêu số nguyên
// so sánh số lượng và số lượng số âm

