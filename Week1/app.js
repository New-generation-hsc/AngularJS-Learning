
$(document).ready(function() {
    var student = {
        name: "",
        type: "student"
    };

    $("#name").keyup(function(event) {
        student.name = $(this).val();
        console.log(student.name);

        var totalNameValue = 0;
        for(var i=0; i<student.name.length; i++){
            totalNameValue += student.name.charCodeAt(i);
        }

        var output = "Total Numeric value of person's name is " + totalNameValue;
        $("#output").text(output);
    });
});
