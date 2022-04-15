function getMenu(){
    let menu = "";
    menu+="<div class='container'>";
    menu+=" <div class='row'>";
    menu+="     <a href='profile/profile.html'>公司資料維護</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='job/jobList.html'>職缺管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='resume/resumeList.html'>履歷管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='interview/interviewList.html'>面試時程管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='accept/acceptList.html'>錄取通知管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='working/workingList.html'>報到資訊管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='contract/contractList.html'>合約管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='question/questionList.html'>問卷管理</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='fileManage/fileList.html'>檔案上傳</a>";
    menu+=" </div>";
    menu+="</div>";

    return menu;
}

function getStudentMenu(){
    let menu = "";
    menu+="<div class='container'>";
    menu+=" <div class='row'>";
    menu+="     <a href='profile/profile.html'>個人資料維護</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='job/jobList.html'>職缺查詢</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='apply/applyList.html'>應徵查詢</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='accept/acceptList.html'>錄取查詢</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='confirm/confirmList.html'>確認實習相關訊息</a>";
    menu+=" </div>";
    menu+="</div>";
    
    return menu;
}

function getTeacherMenu(){
    let menu = "";
    menu+="<div class='container'>";
    menu+=" <div class='row'>";
    menu+="     <a href='job/jobList.html'>職缺審核</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='resume/resumeList.html'>履歷查詢</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='accept/acceptList.html'>錄取查詢</a>";
    menu+=" </div>";
    menu+=" <div class='row'>";
    menu+="     <a href='assign/assignList.html'>安排輔導老師</a>";
    menu+=" </div>";
    menu+="</div>";
    
    return menu;
}

function getManagerMenu(){
    let menu = "";
    menu+="<div class='container'>";
    menu+=" <div class='row'>";
    menu+="     <a href='dashboard.html'>職缺審核</a>";
    menu+=" </div>";
    menu+="</div>";
    
    return menu;
}

function expandMenu(ids) {

    $.each(ids, function() {
        var id = this;
        $("#sidebar").find("li").each(function() {
            if ($(this).attr("id") == id) {
                if ((ids.indexOf(id.toString())+1) != ids.length) {
                    $(this).attr("class", "active");
                    $(this).find('a:first').attr("aria-expanded", "true");
                    $(this).find('ul:first').attr("class", "collapse list-unstyled show");
                } else {
                    $(this).find('a:first').attr("class", "active");
                }
                
            }

        });
    });
}
