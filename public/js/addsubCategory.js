$(document).ready(function () {
    $("#subCategoryForm").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val();
        var categoryId = $("#categoryId").val();

        if (name == "") {
            alert("Please Enter The Name");
            return;
        }

        if (categoryId == "") {
            alert("Please Enter The categoryId");
            return;
        }

        var inputObj = {
            name,
            categoryId
        }

        $.ajax({
            url: "/api/subCategory",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("subCategory Saved Successfully");
                location.href = "/subCategory";
            },
            error: function (err) {
                console.log("error", err);
            }
        })
    })
})
