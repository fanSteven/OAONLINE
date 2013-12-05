/**
 * Created with JetBrains RubyMine.
 * User: steven
 * Date: 11/27/13
 * Time: 11:02 PM
 * To change this template use File | Settings | File Templates.
 */
function userLogin(){
    var dataSource_user_login = new kendo.data.DataSource({
        transport: {
            create:{
                url:"/dounionlogin",
                type:"POST",
                data:{
                    "username":$("#uname").val(),
                    "password":$("#upassword").val()
                },
                success:function(result){
                    if(result.code == 200){
                       index();
                    }
                }
            }
        }
    });
    dataSource_user_login.transport.create();
}

function enterpriseLogin(){
    var  tb = new $.TransportBuilder();
    var enterprise_name = $("#ename").val();
    var enterprise_pass = $("#epassword").val();
    var transport_enterprise_login= tb.build({
        baseUrl: "",
        create:{urlTemp:"/enter_dounionlogin"},
        data:{
            "enterprise_name":enterprise_name,
            "enterprise_pass":enterprise_pass
        }
    });

    var dataSource_enterprise_login = new kendo.data.DataSource({
        transport: transport_enterprise_login
    });
    dataSource_enterprise_login.transport.create();
}