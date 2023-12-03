var strArray = ['my', 'name', 'is', 'anuj'];
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var data = strArray_1[_i];
    console.log(data);
}
for (var i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
}
strArray.forEach(function (ele) { return console.log(ele); });
