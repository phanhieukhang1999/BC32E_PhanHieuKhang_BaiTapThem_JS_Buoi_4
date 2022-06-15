/*------------Bài 1----------- */
document.getElementById('btnNgayHomQua').onclick = function() {
    //input: nhapNgay: number, nhapThang; number, nhapNam: number
    //parseInt: phân tích 1 chuỗi và trả về số nguyên nếu có thể
    var ngay = parseInt(document.getElementById('nhapNgay').value);
    var thang = parseInt(document.getElementById('nhapThang').value);
    var nam = parseInt(document.getElementById('nhapNam').value);
    //output:ketQua: string
    var ketQua = '';
    //xử lý
    switch(thang) {
        case 1: {
        if(ngay > 1 && ngay <= 31 ) {
            ketQua = ngay - 1 + '/' + thang + '/' + nam;
        }else if(1 == ngay) {
            ketQua = '31/12/' + (nam - 1);
        }else {
            ketQua = 'Ngày không xác đinh !';
        }
        };break;
        
        case 2 : {
            if(ngay > 1 && ngay <= 28) {
                ketQua = ngay - 1 + '/' + thang + '/' + nam;
            }
            else if(1 == ngay) {
                ketQua = '31/' + (thang - 1) + '/' + nam;
            }else {
                ketQua = 'Ngày không xác định !';
            }
        };break;
        case 3: {
            if(ngay > 1 && ngay < 31) {
                ketQua = ngay -1 + '/' + thang + '/' + nam;
            }
            else if(1 == ngay) {
                ketQua = NaN + (thang - 1) + '/' + nam;
            }else {
                ketQua = 'Ngày không xác định !';
            }
        };break;
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            if(ngay > 1 && ngay < 31) {
                ketQua = ngay - 1 + '/' + thang + '/' + nam;
            }
            else if(1 == ngay) {
                ketQua = '30/' + (thang - 1) + '/' + nam;
            }else {
                ketQua = 'Ngày không xác định !';
            }
        };break;
        case 4:
        case 6:
        case 9:
        case 11: {
            if(ngay > 1 && ngay < 30) {
                ketQua = ngay - 1 + '/' + thang + '/' + nam;
            }
            else if(1 == ngay) {
                ketQua = '31/' + (thang - 1) + '/' + nam;
            }else {
                ketQua = 'Ngày không xác định !';
            }
        }

    }
    //hiển thị giao diện
    document.getElementById('ketQua_b1').innerHTML = ketQua;
}
document.getElementById('btnNgayMai').onclick = function() {
    //parseInt: phân tích 1 chuỗi và trả về số nguyên nếu có thể
    //input: ngay: number, thang; number, nam: number
    var ngay = parseInt(document.getElementById('nhapNgay').value);
    var thang = parseInt(document.getElementById('nhapThang').value);
    var nam = parseInt(document.getElementById('nhapNam').value);
    //output:ketQua: string
    var ketQua = '';
    //xử lý
    switch(thang) {
        case 1: 
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10: {
            if(ngay > 0 && ngay < 31 ) {
                ketQua = ngay + 1 + '/' + thang + '/' + nam;
            }else if(31 == ngay) {
                ketQua = '1/' + (thang + 1) + '/' + nam;
            }else {
                ketQua = 'Ngày không xác đinh !';
            }
        };break;
        case 2: {
            if(ngay > 0 && ngay < 28 ) {
                ketQua = ngay + 1 + '/' + thang + '/' + nam;
            }else if(28 == ngay) {
                ketQua = '1/' + (thang + 1) + '/' + nam;
            }
            else {
                ketQua = 'Ngày không xác đinh !';
            }
        };break;

        case 4:
        case 6:
        case 9:
        case 11: {
            if(ngay > 0 && ngay < 30) {
                ketQua = ngay + 1 + '/' + thang + '/' + nam;
            }
            else if(30 == ngay) {
                ketQua = '1/' + (thang + 1) + '/' + nam;
            }else {
                ketQua = 'Ngày không xác định !';
            }
        };break;
        case 12: {
            if(ngay > 0 && ngay < 31) {
                ketQua = ngay + 1 + '/' + thang + '/' + nam;
            }
            else if(31 == ngay) {
                ketQua = '1/1' + (nam + 1);
            }else {
                ketQua = 'Ngày không xác định !';
            }
        };break;
        default: {
            ketQua = 'Tháng không xác định !';
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b1').innerHTML = ketQua;
}

/*-----------Bài 2------------ */
document.getElementById('btnTinhNgay').onclick = function() {
    //input: thang1: number, nam1: number
    var thang1 = parseInt(document.getElementById('nhapThang1').value);
    var nam1 = parseInt(document.getElementById('nhapNam1').value);
    //output: ngay1: number; n: number
    var ngay1 = 0;
    var n = !1;
    //xử lý: 
    switch((nam1 % 4 == 0 && nam1 % 100 != 0 || nam1 % 400 == 0) 
    && (n = !0), thang1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            ngay1 = 31;
        };break;
        case 4:
        case 6:
        case 9:
        case 11: {
            ngay1 = 30;
        };break;
        case 2: {
            if(n) {
                ngay1 = 29;
            }
            else {
                ngay1 = 28;
            }
        };break;
        default: {
            ngay1 = 0;
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b2').innerHTML = 'Tháng ' + thang1 + ' năm ' + nam1 + ' có ' + ngay1 + ' ngày ';
}

/*-----------Bài 3------------ */
document.getElementById('btnDoc').onclick = function() {
    //input: nhap3So: string
    var nhap3So = document.getElementById('nhap3So').value;
    //output: hangTram: number, hangChuc: number, ketQua: string
    var hangTram = Math.floor(nhap3So / 100);
    var hangChuc = Math.floor(nhap3So % 100 / 10);
    var ketQua = '';
    //xử lý
    switch(hangTram) {
        case 1: {
            ketQua += 'một trăm ';
        };break;
        case 2: {
            ketQua += 'hai trăm ';
        };break;
        case 3: {
            ketQua += 'ba trăm ';
        };break;
        case 4: {
            ketQua += 'bốn trăm ';
        };break;
        case 5: {
            ketQua += 'năm trăm ';
        };break;
        case 6: {
            ketQua += 'sáu trăm ';
        };break;
        case 7: {
            ketQua += 'bảy trăm ';
        };break;
        case 8: {
            ketQua += 'tám trăm ';
        };break;
        case 9: {
            ketQua += 'chín trăm ';
        };break;
        default: {
            alert('Số hàng trăm không xác định !');
        }
    }

    switch(hangChuc) {
        case 1: {
            ketQua += 'mười ';
        };break;
        case 2: {
            ketQua += 'hai mươi ';
        };break;
        case 3: {
            ketQua += 'ba mươi ';
        };break;
        case 4: {
            ketQua += 'bốn mươi ';
        };break;
        case 5: {
            ketQua += 'năm mươi ';
        };break;
        case 6: {
            ketQua += 'sáu mươi ';
        };break;
        case 7: {
            ketQua += 'bảy mươi ';
        };break;
        case 8: {
            ketQua += 'tám mươi ';
        };break;
        case 9: {
            ketQua += 'chín mươi ';
        };break;
        default: {
            alert('Số hàng chục không xác định !');
        }
    }

    switch(nhap3So % 100 % 10) {
        case 1: {
            ketQua += 'một';
        };break;
        case 2: {
            ketQua += 'hai';
        };break;
        case 3: {
            ketQua += 'ba';
        };break;
        case 4: {
            ketQua += 'bốn';
        };break;
        case 5: {
            ketQua += 'năm';
        };break;
        case 6: {
            ketQua += 'sáu';
        };break;
        case 7: {
            ketQua += 'bảy';
        };break;
        case 8: {
            ketQua += 'tám';
        };break;
        case 9: {
            ketQua += 'chín';
        };break;
        default: {
            alert('Số hàng đơn vị không xác định !');
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b3').innerHTML = ketQua; 
}

/*-----------Bài 4------------ */
document.getElementById('btnTim').onclick = function() {
    //input: nhapTen1: string, toaDoX1: number, toaDoY2: number, nhapTen2: string, toaDoX2: number, toaDoY2: number, nhapTen3: string, toaDoX3: number, toaDoY3: number, toaDo4: number, toaDoY4: number
    var nhapTen1 = document.getElementById('nhapTen1').value;
    var toaDoX1 = Number(document.getElementById('nhapToaDoX1').value);
    var toaDoY1 = Number(document.getElementById('nhapToaDoY1').value);
    var nhapTen2 = document.getElementById('nhapTen2').value;
    var toaDoX2 = Number(document.getElementById('nhapToaDoX2').value);
    var toaDoY2 = Number(document.getElementById('nhapToaDoY2').value);
    var nhapTen3 = document.getElementById('nhapTen3').value;
    var toaDoX3 = Number(document.getElementById('nhapToaDoX3').value);
    var toaDoY3 = Number(document.getElementById('nhapToaDoY3').value);
    var toaDoX4 = Number(document.getElementById('nhapToaDoX4').value);
    var toaDoY4 = Number(document.getElementById('nhapToaDoY4').value);
    //output: khoangCach: string, diem1: number, diem2: number, diem3: number
    var khoangCach = '';
    var diem1 = 0;
    var diem2 = 0;
    var diem3 = 0;


    var diem1 = Math.sqrt(Math.pow(toaDoX4 - toaDoX1, 2) + Math.pow(toaDoY4 - toaDoY1, 2));
    console.log(diem1);

    var diem2 = Math.sqrt(Math.pow(toaDoX4 - toaDoX2, 2) + Math.pow(toaDoY4 - toaDoY2, 2));
    console.log(diem2);

    var diem3 = Math.sqrt(Math.pow(toaDoX4 - toaDoX3, 2) + Math.pow(toaDoY4 - toaDoY3, 2));
    console.log(diem3);

    //xử lý
    if(diem1 > diem2 && diem1 > diem3) {
        khoangCach = nhapTen1;
    }else if(diem2 > diem1 && diem2 > diem3) {
        khoangCach = nhapTen2;
    }else {
        khoangCach = nhapTen3;
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b4').innerHTML = 'Sinh viên xa trường nhất là: ' + khoangCach;
}