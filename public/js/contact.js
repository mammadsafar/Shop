$(document).ready(function () {

    $(".sendmess").click(function () {
        $(".bar").css("animationName", "send");
        SendMess();
    })

    function SendMess() {
        setTimeout(function () {
            $(".l1").css("display", "none");
            $(".l2").css("display", "none");
            $(".mailinput").css("display", "none");
            $(".messtxt").css("display", "none");
            $(".sendmess").css("display", "none");

            $(".success").css("display", "inline");
            $(".closemess").css("display", "inline");
        }, 1500);
    }

    $(".closemess").click(function () {
        $(".bar").css("animationName", "none");
        $(".l1").css("display", "inline");
        $(".l2").css("display", "inline");
        $(".mailinput").css("display", "inline");
        $(".messtxt").css("display", "inline");
        $(".sendmess").css("display", "inline");

        $(".success").css("display", "none");
        $(".closemess").css("display", "none");

        $(".mailinput").val("");
        $(".messtxt").val("");
    })
})