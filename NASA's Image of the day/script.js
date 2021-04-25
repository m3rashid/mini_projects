
$("#submit").click(function(){
    $.ajax({
        method: "get",
        url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
        data: {date: $("#input")[0].value},
        success: function(data){
            $(".image").attr("src", data.url);
        }
    });
});