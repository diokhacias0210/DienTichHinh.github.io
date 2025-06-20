
    function tinhcn(event) {
        event.preventDefault();
        let dai = parseFloat(document.getElementById("chieudaicn").value);
        let rong = parseFloat(document.getElementById("chieurongcn").value);
        if (isNaN(dai)||isNaN(rong)||dai<=0||rong<=0){
            document.getElementById("ketquacn").textContent = "hãy nhập số hợp lệ";
            return;
        }
        else{
            let ketqua = dai * rong;
            document.getElementById("ketquacn").textContent = ketqua;
        }   
    }
    function tinhv(event){
        event.preventDefault();
        let canh = parseFloat(document.getElementById("chieudaicanh").value);
        if(isNaN(canh)||canh<=0){
            document.getElementById("ketquav").textContent = "hãy nhập số hợp lệ";
        } 
        else{
            let kq = canh * canh;
            document.getElementById("ketquav").textContent = kq;
        }
    }

    function tinhht(event){
        event.preventDefault();
        let daylon = parseFloat(document.getElementById("daylonht").value);
        let daynho = parseFloat(document.getElementById("daynhoht").value);
        let cao = parseFloat(document.getElementById("chieucaoht").value);
        if(isNaN(daylon)||isNaN(daynho)||isNaN(cao)||daylon<=0||daynho<=0||cao<=0){
            document.getElementById("ketquaht").textContent = "Hãy nhập số hợp lệ";
        }
        else {
            let kq = (daylon +daynho)*cao / 2;
            document.getElementById("ketquaht").textContent = kq;
        }
    }
    function tinhhtr(event){
        event.preventDefault(); // giữ trang ko reset
        let r = parseFloat(document.getElementById("bankinhhtr").value);
        if(isNaN(r)||r<=0){
            document.getElementById("ketquahtr").textContent = "Hãy nhập số hợp lệ";
        }
        else {
            let kq = Math.PI * r * r;
            document.getElementById("ketquahtr").textContent = kq.toFixed(2); //tofixed: làm tròn
        }
    }