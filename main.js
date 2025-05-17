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
    let content = ''
    for (let i = 0; i < array.length; i++) {
        number = array[i]
        if (number > 0) {
            content += number + ', ';
            tong += number;
        }
    }
    document.getElementById('result_TongSoDuong').innerHTML =
        `<div>Các số dương trong dãy là: ${content}</div>
        <div>Tổng là: ${tong}</div>`;
}
// Đếm số dương
function countSoDuong() {
    let count = 0;
    let content = ''
    for (let i = 0; i < array.length; i++) {
        number = array[i];
        if (number > 0) {
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
        if (array[i] > 0) {
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
    soChan = -1; // Giá trị mặc định khi trong mảng không có số chẳn
    for (let i = array.length; i >= 0; i--) {
        if (array[i] % 2 === 0) {
            soChan = array[i]
            break;
        }
    }
    document.getElementById('result_theLastChan').innerHTML = `
    Số chẳn cuối cùng trong mảng là: ${soChan}`
}
//Đổi chỗ 2 giá trị bất kì trong mảng
function onSwapPosition() {
    let index_1 = document.getElementById('index_1').value * 1;
    let index_2 = document.getElementById('index_2').value * 1;
    if (index_1 < 0 || index_2 < 0 || index_1 >= array.length || index_2 >= array.length) {
        alert('Vui lòng nhập đúng chỉ số index')
    } else {
        let temp = array[index_1];
        array[index_1] = array[index_2];
        array[index_2] = temp;
    }
    document.getElementById('result_swapPosition').innerHTML = `
    Dãy số của bạn sau khi đã hoán đổi chỉ số index là: ${array}
    `
}
//Sắp xếp mảng theo thứ tự tăng dần
function fromSmallToLarge() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            temp = array[j];
            if (array[j] > array[j + 1]) {
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    document.getElementById('result_fromSmallToLarge').innerHTML = `
    Thứ tự tăng dần của dãy số là: ${array}`
}
//Tìm số nguyên tố đầu tiên
function theFirstPrimeNumber() {
    let content = '';
    for (let i = 0; i < array.length; i++) {
        let isPrimeNumber = true;
        //Không xử lí với giá trị nhập vào <=2 (điều kiện số nguyên tố)
        //Đồng thời, Chặn các số >=2 nhưng không phải là số nguyên 
        if (array[i] <= 2 || !Number.isInteger(array[i])) continue 

        for (let j = 2; j <= Math.sqrt(array[i]); j++) {
            if (array[i] % j === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            content = `Số nguyên tố đầu tiên trong dãy là: ${array[i]}`
            break
        }
    }
    if (content === ``) {
        content = `Không có số nguyên tố trong dãy`
    }
    document.getElementById('result_primeNumber').innerHTML = content
}
//Đếm số nguyên
function countInteger() {
    let countInteger = 0;
    let content = ''
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            content += array[i] + ', '
            countInteger++;
        }
    }
    document.getElementById('result_countInteger').innerHTML = `
    Có tất cả là ${countInteger++} số nguyên. Bao gồm: ${content}`
}
//So sánh số lượng số âm và số dương
function compareNumber() {
    let count_duong = 0;
    let count_am = 0;
    let content_duong = '';
    let content_am = '';
    let count_result = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) continue;
        else if (array[i] < 0) {
            content_am += array[i] + ', '
            count_am++;
        } else {
            content_duong += array[i] + ', '
            count_duong++;
        }
    }
    if (count_am < count_duong) {
        count_result = 'Số lượng số âm nhỏ hơn số lượng số dương'
    } else if (count_am > count_duong) {
        count_result = 'Số lượng số âm lớn hơn số lượng số dương'
    } else {
        count_result = 'Số lượng số âm bằng với số lượng số dương'
    }
    document.getElementById('result_compareNumber').innerHTML = `
    Có ${count_am} số âm trong dãy là: ${content_am} <br>
    Có ${count_duong} số dương trong dãy là: ${content_duong} <br>
    Suy ra: ${count_result}
    `
}







