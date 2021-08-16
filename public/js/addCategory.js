$(document).ready(function () {
    $("#categoryForm").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val();

        if (name == "") {
            alert("Please Enter The Name");
            return;
        }

        var inputObj = {
            name
        }
        $.ajax({
            url: "/api/category",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("Category Saved Successfully");
                location.href = "/category";
            },
            error: function (err) {
            }
        })
    })
})
