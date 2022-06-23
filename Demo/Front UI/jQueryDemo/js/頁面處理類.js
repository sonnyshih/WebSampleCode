function jQueryShowContent(id, url){
    let data = {
        "id": id,
        "url": url
    }

    $("#"+id).load(url);
    history.pushState( data, "", "" );

}

//
/**
 * For browser's back button
 * must set in the
 *  $(function(){
 * 		addPopstateEventListener()
 * 	});
*/
function addPopstateEventListener(){
    window.addEventListener('popstate', function(event) {
        let state = event.state;
        if (state == null) {
            history.back();
            return;
        }

        let stateID = state.id;
        let stateUrl = state.url;

        $("#"+stateID).empty();
        $("#"+stateID).load(stateUrl);

    }, false);

}

/**
 * 不太會用到
 */
function jQueryGetContent(id, url){
    $.get(url,
        function (data) {	// 回傳的data是 字串
            $("#"+id).empty();
            $("#"+id).append(data);
        })
        .fail(function() {
            alert("沒有頁面");
        });
}