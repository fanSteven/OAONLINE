/**
 * @author Steven
 */
var userinfoArray =
    [
        {"username":"itsm","password":"itsm"},
        {"username":"admin","password":"admin"}
    ];
function submitlogin(){
    var username = $("#username").val();
    var password = $("#password").val();
    var _ret = false;
    var _cunzai = false;
    var _resultStr = "";
    //alert(username);
    for (var i=0; i < userinfoArray.length; i++) {
        if(userinfoArray[i].username==username && userinfoArray[i].password==password){
            //alert(username);
            _ret = false;
            _cunzai = true;
            $("#result_span").hide();
            location.href = "index.html";
            break;
        }else{
            _resultStr = "用户名或密码错误！";

        }
    }
    $("#result_span").empty();
    if(_resultStr!="" && !_cunzai){
        $("#result_span").append(_resultStr);
        $("#result_span").show();
        _resultStr="";
    }
    return _ret;
}

