$(document).ready(function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
        sidebar.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
            sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else
            sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }

        $("#addBtn").click(function () {
            location.href = "/ad/add";
        })
    
        $("#deleteBtn").click(function () {
            var checkbox = $("input:checkbox:checked").length;
    
            if (checkbox != 1) {
                alert("please select only one element");
                return;
            }
            
            var check = confirm("Are you Sure you want to delete");
    
            if (!check) {
                location.reload();
                return;
            }
    
            var all, checked;
            all = $("input:checkbox");
            checked = all.filter(":checked");
    
            var checkedIds = checked.map(function() {
                return this.id;
            });
            console.log(checkedIds[0]);
    
            $.ajax({
                url: `/api/ad/${checkedIds[0]}` ,
                type: "DELETE",
                success: function (data) {
                    console.log("success", data);
                    alert("Ad Deleted Successfully");
                    location.reload();
                },
                error: function (err) {
                    console.log("error", err)
                }
            })
    
        })
    });
