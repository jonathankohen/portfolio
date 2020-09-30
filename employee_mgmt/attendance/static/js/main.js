$('#punch_button').click(function () {
    if ($('#punch_button').is('.btn-primary')) {
        $('#punch_button').addClass('btn-success');
        $('#punch_button').removeClass('btn-primary');
    }
});

const d = new Date();
page.currentYear = d.getFullYear();
