/**
 * Created by DT263 on 2017/2/27.
 */
function exportData() {
    var CONTEXT_PATH = 'http://localhost/mblog-web'

    var url = CONTEXT_PATH + "/index/test.html?r=" + Math.random();
    var param = $('#form-horizontal').serialize();

    $.ajax({
        url: url,
        async: false,
        type: "post",
        data: param,
        beforeSend: function () {
        },
        success: function (data) {
            var message = "";

        },
        error: function (data) {

        }
    });

}