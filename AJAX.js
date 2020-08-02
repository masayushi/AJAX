var content = document.getElementById("content");

var xhr = new XMLHttpRequest();         //跟伺服器要求資料的物件

xhr.open("get", "./data.text", true);   //開啟檔案("取得","檔案路徑",非同步處理(可打可不打)
xhr.send();                             //傳送

// 載入完成後會執行
xhr.onload = () => {
    content.innerText = xhr.responseText;
}

//JSON
var product = document.getElementById("product");
var price = document.getElementById("price");

var xhrJson = new XMLHttpRequest();

xhrJson.open("get", "./data.json");
xhrJson.send();

xhrJson.onload = () => {
    //JSON.格式(想轉為 JSON 的內容)
    var json = JSON.parse(xhrJson.responseText);
   
    product.innerText = json["product"];
    price.innerText = json["price"];
}