/**
 * Created with JetBrains RubyMine.
 * User: steven
 * Date: 11/27/13
 * Time: 11:02 PM
 * To change this template use File | Settings | File Templates.
 */
function userLogin()
{
    var tb = new $.TransportBuilder();
    var username = $("#uname").val();
    var userpass = $("#upassword").val();
    var transport= tb.build({
       baseUrl: "",
       create:{urlTemp:"/dounionlogin"}
    });

    var dataSource = new kendo.data.DataSource({
        transport: transport,
        dataType:"json",
        data:{
            username:username,
            password:userpass
        }
    });
    dataSource.transport.create();
}