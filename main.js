var akanName = function(y, m, d, g) {
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   
    var d = new Date(y, --m, d);
    if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

$(document).ready(function() {
    $(".button").click(function(event) {
        event.preventDefault();
        var y = parseInt($(".year").val());
        var m = parseInt($(".month").val());
        var d = parseInt($(".date").val());
        var g = $("select").val();
        var result = akanName(y, m, d, g);
        $("span").html("Your akan name is: " + result)
        //alert("Your akan name is: " + result);
        //refresh page
        
    });
});