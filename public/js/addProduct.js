$(document).ready(function () {
    $("#productForm").submit(function (event) {
        event.preventDefault();

        var productName = $("#productName").val();
        var vendorName = $("#vendorName").val();
        var quantityAvailable = $("#quantityAvailable").val();
        var description = $("#description").val();
        var categoryId = $("#categoryId").val();
        var subCategory = $("#subCategory").val();
        var price = $("#price").val();

        if (productName == "") {
            alert("Please Enter The ProductName");
            return;
        }

        if (vendorName == "") {
            alert("Please Enter The VendorName");
            return;
        }

        if (quantityAvailable == "") {
            alert("Please Enter The QuantityAvailable");
            return;
        }

        if (description == "") {
            alert("Please Enter The Description");
            return;
        }

        if (categoryId == "") {
            alert("Please Enter The categoryId");
            return;
        }

        if (subCategory == "") {
            alert("Please Enter The SubCategory");
            return;
        }
        if (price == "") {
            alert("Please Enter The Price");
            return;
        }

        var inputObj = {
            productName,
            vendorName,
            quantityAvailable,
            description,
            categoryId,
            subCategory,
            price
        }
        $.ajax({
            url: "/api/product",
            type: "POST",
            data: inputObj,
            success: function (data) {
                console.log("success", data);
                alert("Product Saved Successfully");
                location.href = "/product";
            },
            error: function (err) {
            }
        })
    })
})
