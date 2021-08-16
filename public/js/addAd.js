$(document).ready(function () {
    $("#adForm").submit(function (event) {
        event.preventDefault();

        var title = $("#title").val();
        var description = $("#description").val();
        var targetUrl = $("#targetUrl").val();

        if (title == "") {
            alert("Please Enter The Title");
            return;
        }

        if (description == "") {
            alert("Please Enter The Description");
            return;
        }

        if (targetUrl == "") {
            alert("Please Enter The Targeturl");
            return;
        }

        var inputObj = {
            title,
            description,
            targetUrl
        }
        $.ajax({
            url: "/api/ad",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("Ad Saved Successfully");
                location.href = "/ad";
            },
            error: function (err) {
            }
        })
    })
})
