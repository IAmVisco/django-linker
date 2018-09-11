$(document).ready(function() {
    let total = $("#id_form-TOTAL_FORMS").val();

    function setRemove(){
        $(".fa-times").click(function() {
            $(this).parent().remove();
            // $("#id_form-" + $(this).attr("id") + "-link").val("");
            $("#id_form-TOTAL_FORMS").val(--total);
        });
    }
    setRemove();

    $('#add_more').click(function() {
        total;
        let form = '<div class="entry">\n' +
            '        <div class="form-group">\n' +
            '            <label for="id_form-__prefix__-name">Name:</label>\n' +
            '            <input type="text" name="form-__prefix__-name" maxlength="32" class="form-control" id="id_form-__prefix__-name">\n' +
            '        </div>\n' +
            '        <div class="form-group">\n' +
            '            <label for="id_form-__prefix__-link">Link:</label>\n' +
            '            <input type="text" name="form-__prefix__-link" maxlength="255" class="form-control" id="id_form-__prefix__-link">\n' +
            '        </div>\n' +
            '    <i class="fas fa-times" id="__prefix__"></i>\n' +
            '</div>\n';
        $('#forms').append(form.replace(/__prefix__/g, total));
        $('#id_form-TOTAL_FORMS').val(++total);

        setRemove();
    });

    function uuid4(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, uuid4)}

    $("#new_uuid").click(function () {
        $("#id_uuid").val(uuid4());
    });
});