

$(document).ready(function () {
  $('#MybtnModal').click(function () {
    $('#Mymodal').modal('show')
  });
  $('.MybtnModal2').click(function () {
    $('#Mymodal').modal('show')
  });
  $("#Myform").submit(function (event) {
    event.preventDefault();
    $('#fName').val();
    $('#lName').val();
    $('#inputEmail4"').val();
    $('#inputPassword4').val();
    $('#inputAddress').val();
    $('#age').val();
    $('#inputCity').val();
    $('#inputState').val();
    $('#inputZip').val();
    $('#inputState').val();
    $('#radio').val();
    $("input[type='radio']").val();
    $("input[type='checkbox']").val();
  });
});


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
  event.preventDefault();

  var nbr;
  nbr = document.getElementById("age").value;
  if (isNaN(nbr)) {
    alert("Enter the Number");
  }
  return false;

}