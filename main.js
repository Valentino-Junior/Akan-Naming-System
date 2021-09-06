//create gender arrays and a days array
    var akanName = function(y, m, d, g, da) {
        var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    
        var d = new Date(y, --m, d);
        var da  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (g === "Female") {
            return d && femaleNames[d.getDay()];
        } else {
            return d && maleNames[d.getDay()];
        }
    }

//calculate the century using the year of birth
//var century = y.split("",2).join("");
//    //reassign the variables to the formula names
//    var CC = Number(century);
//    var YY = y;
//    var MM = m;
//    var DD = d;
//     //calculate the day of birth
//    var dayOfBirth =  Math.round(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7) ;
//   


//store user input in variables
    $(document).ready(function() {
        $("form").submit(function(event) {
            event.preventDefault();
            var y = parseInt($(".year").val());
            var m = parseInt($(".month").val());
            var d = parseInt($(".date").val());
            var g = $("select").val();


//you can use this formula below or use the min and max as i have used in the html to determine the validity of the value inputted by sending an alert
        //if (m<= 0 || m >12) {
        //    alert("Invalid Month")
        //} 
        //if (d<= 0 || d >31) {
        //    alert("Invalid Date")
        //} 

//give back an akan name based on the gender
        var result = akanName(y, m, d, g,);
        $("span").html("Your akan name is: " + result)

 //you can use this formula below to display result inform of an alert
    //alert("Your akan name is: " + result);
    //refresh page
    
    });
});
