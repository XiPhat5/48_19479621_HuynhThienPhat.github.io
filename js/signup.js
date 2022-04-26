function kiemHoTen(){
    let mauHT = /^([a-z]+)((\s{1}[a-z]+){1,})$/i;
    let chuoi = document.getElementById('txtHT').value.trim();
    if ( mauHT.test(chuoi)==true){
        hoten.innerText="✅";
    }
    else{
        hoten.innerText="❌Nhập chưa đúng, không bao gồm chữ số! ";
    }
}
function kiemCLB(){
    let mauHT = /^([a-z]+)((\s{1}[a-z]+){1,})$/i;
    let chuoi = document.getElementById('txtCLB').value.trim();
    if ( mauHT.test(chuoi)==true){
        clb.innerText="✅";
    }
    else{
        clb.innerText="❌Nhập chưa đúng, không bao gồm chữ số! ";
    }
}
function kiemtraNgayTT(){
    var ns = new Date(document.getElementById('txtNS').value);
    var today = new Date();
    if ( eval(today.getDay()-ns.getDay()) < 7 ){
        ngayTT.innerText = " ❌ Ngày tập trung sau 7 ngày !";
    }else{
        ngayTT.innerText ="✅";
        return true;
    }
}
function kiemtraDT(){
    var mauSDT = /^(\d+){10,}$/;
    var chuoiSDT = document.getElementById('txtDT').value.trim();
    if ( mauSDT.test(chuoiSDT)==true){
        dienthoai.innerText="✅";
    }
    else{
        dienthoai.innerText="❌Số điện thoại >10 số !";
    }
}
function kiemtraSOAO(){
    var mauSDT = /^(\d+){10,}$/;
    var chuoiSDT = document.getElementById('txtSA').value.trim();
    if ( mauSDT.test(chuoiSDT)==true){
        dienthoai.innerText="✅";
    }
    else{
        dienthoai.innerText="❌Nhập số nguyên ";
    }
}
function SubmitFrom(){
    if (kiemtraDN()== false ||
        kiemtraPassword ==false ||
        kiemtraxacnhanPassword()==false ||
        kiemHoTen() == false ||
        kiemtraDT()==false||
        kiemtraEmail ==false){
            alert("❌Thông tin bạn nhập chưa đúng !")
            
        }
    else{
        var tt1 = document.getElementById("txtHT").value;
        var tt2 = document.getElementById("txtNS").value;
        var tt3 = document.getElementById("txtDC").value;
        var tt4 = document.getElementById("txtDT").value;
        var tt5 = document.getElementById("txtEmail").value;
        var w = open("FormValidation_info.html","Ketqua");
        w.document.write("<B> INFORMATION PERSON"+"<br>");
        w.document.write("Họ tên :"+tt1+"<br>");
        w.document.write("Năm sinh :"+tt2+"<br>");
        w.document.write("Địa chỉ:"+tt3+"<br>");
        w.document.write("Số điện thoại :"+tt4+"<br>");
        w.document.write("Email :"+tt5+"<br>");
    }
}
function fun(){  
document.getElementById("form_1").reset();  
}  