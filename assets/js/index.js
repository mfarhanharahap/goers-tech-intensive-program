$("#add_product").submit(function(event) {
    alert("Data Inserted Successfully");
})

$("#update_product").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value']
    })

    console.log(unindexed_array);

    var request = {
        "url": `http://localhost:3000/api/products/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data updated succesfully")
    })

})

if(window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/products/${id}`,
            "method": "DELETE",
        }

        if (confirm("Do you really want to delete?")){
            $.ajax(request).done(function(response){
                alert("Data deleted succesfully");
                location.reload()
            })
        }
    })
}