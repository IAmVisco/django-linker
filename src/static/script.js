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

    $('#edit-btn').popover({title: "Not yet", content: "Will do soon", trigger: "hover"});
});