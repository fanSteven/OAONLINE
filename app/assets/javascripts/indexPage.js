/**
 * Created with JetBrains RubyMine.
 * User: steven
 * Date: 11/29/13
 * Time: 4:56 AM
 * To change this template use File | Settings | File Templates.
 */
function index(){
    var dataSource_index = new kendo.data.DataSource({
        transport: {
            read:{
                url:"/index",
                type:"GET"
            }
        }
    });
    dataSource_index.transport.read();
}