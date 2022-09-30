
// jQuery part
$(document).ready(function () {
  $('#btn-Modal').click(function () {
    $('#log-in-modal').modal('show')
  });
  $('.log-in-btn-modal').click(function () {
    $('#log-in-modal').modal('show')
  });

  $("#user-detail-form").submit(function (event) {
 event.preventDefault();
  var nbr;
  nbr = document.getElementById("inputAge").value;
  if (isNaN(nbr)) {
    alert("Enter the Number");
  }
    var fname = $('#inputFirstname').val();
console.log(fname);
var lname = $('#inputLastname').val();console.log(lname);
var Email = $('#inputEmail').val();
console.log(Email);
var Password = $('#inputPassword').val();console.log(Password);
var Address = $('#inputAddress').val();console.log(Address);
var Age = $('#inputAge').val();console.log(Age);
var City = $('#inputCity').val();console.log(City);
var State = $('#inputState').val();console.log(State);
var Zip = $('#inputZip').val();console.log(Zip);
var radio = $("input[name='inlineRadioOptions']:checked").val();console.log(radio);
// var checkbox = $("input[type='checkbox']:checked").val();console.log(checkbox);
 $(".checkcls:checked").each(function(){
	var checkbox = $(this).val(); 
  console.log(checkbox);

  // alert($(this).val())
  });
  return false;
  });
});

//Javascript part
function deleterecord() {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
};
function addUser(event) {
  // event.preventDefault();
  // var nbr;
  // nbr = document.getElementById("inputAge").value;
  // if (isNaN(nbr)) {
  //   alert("Enter the Number");
  // }
  // $('#inputFirstname').val();
  //   $('#inputLastname').val();
  //   $('#inputEmail').val();
  //   $('#inputPassword').val();
  //   $('#inputAddress').val();
  //   $('#inputtAge').val();
  //   $('#inputCity').val();
  //   $('#inputState').val();
  //   $('#inputZip').val();
  //   $('#inputState').val();
  //   $("input[type='radio']").val();
  //   $("input[type='checkbox']").val();
  // return false;

};