var akanName = function(y, m, d, g) {
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   
    var d = new Date(y, --m, d);
    if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($(".year").val());
        var m = parseInt($(".month").val());
        var d = parseInt($(".date").val());
        var g = $("select").val();

        //you can use this formula or min and max in the html to determine the validity of the value inputted by sending an alert
        //if (m<= 0 || m >12) {
        //    alert("Invalid Month")
        //} 
        //if (d<= 0 || d >31) {
        //    alert("Invalid Date")
        //} 
        
        var result = akanName(y, m, d, g);
        $("span").html("Your akan name is: " + result)
        
        //you can use this formula to display result inform of an alert
        //alert("Your akan name is: " + result);
        //refresh page
        
    });
});