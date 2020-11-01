$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
   colorChange()
   showNotes()

function colorChange() {
    // var = timeBlocks[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] 
    for (var i = 7; i < 20; i++ ) {
         
         if (i < moment().get("hour")) {
            $(".row.hour-"+ i +">.note").addClass("past");
         }
         else if (i > moment().get("hour")) {
            $(".row.hour-"+ i +">.note").addClass("future");
         }
         else if (i == moment().get("hour")) {
            $(".row.hour-"+ i +">.note").addClass("present");
         }
    }
}


$("button").click(function(){
   
   window.localStorage.setItem($(this).parent().children(".note").attr("name"), $(this).parent().children(".note").val());
  });


function showNotes() {
    for (var i = 7; i < 20; i++ ) {
        
            $(".row.hour-"+ i +">.note").val(window.localStorage.getItem("textarea-" + i));
    }

      
}