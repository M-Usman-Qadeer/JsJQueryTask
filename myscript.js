

$(document).ready(function () {
  $('#btn-Modal').click(function () {
    $('#log-in-modal').modal('show')
  });
  $('.log-in-btn-modal').click(function () {
    $('#log-in-modal').modal('show')
  });
  $("#user-detail-form").submit(function (event) {
    event.preventDefault();
    $('#fName').val();
    $('#lName').val();
    $('#inputEmail"').val();
    $('#inputPassword').val();
    $('#inputAddress').val();
    $('#inputinputAge').val();
    $('#inputCity').val();
    $('#inputState').val();
    $('#inputZip').val();
    $('#inputState').val();
    // $('#radio').val();
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
  nbr = document.getElementById("inputAge").value;
  if (isNaN(nbr)) {
    alert("Enter the Number");
  }
  return false;

}