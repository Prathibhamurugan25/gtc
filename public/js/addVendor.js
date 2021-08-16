$(document).ready(function () {
    $("#vendorForm").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val();
        var company_name = $("#companyName").val();
        var plan_id = $("#planId").val();
        var email = $("#email").val();
        var password = $("#password").val();
        

        if (name == "") {
            alert("Please Enter The Name");
            return;
        }

        if (company_name == "") {
            alert("Please Enter The Companyname");
            return;
        }

        if (plan_id == "") {
            alert("Please Enter The Planid");
            return;
        }

        if (email == "") {
            alert("Please Enter The Email");
            return;
        }

        if (password == "") {
            alert("Please Enter The Password");
            return;
        }

        var inputObj = {
            name,
            company_name,
            plan_id,
            email,
            password
        }
        $.ajax({
            url: "/api/vendor",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("Vendor Saved Successfully");
                location.href = "/vendor";
            },
            error: function (err) {
            }
        })
    })
})
