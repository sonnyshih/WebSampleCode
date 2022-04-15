
function expandMenu(ids) {

    $.each(ids, function () {
        var id = this;
        $("#sidebar").find("li").each(function () {
            if ($(this).attr("id") == id) {
                if ((ids.indexOf(id.toString()) + 1) != ids.length) {
                    $(this).attr("class", "active");
                    $(this).find('a:first').attr("aria-expanded", "true");
                    $(this).find('ul:first').attr("class", "collapse list-unstyled show");
                } else {
                    $(this).attr("class", "active");
                    $(this).find('a:first').attr("class", "active");
                }

            }

        });
    });
}