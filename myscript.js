
  
    $(document).ready(function(){
        $('#MybtnModal').click(function(){
            $('#Mymodal').modal('show')
        });
        $('.MybtnModal2').click(function(){
            $('#Mymodal').modal('show')
        });
    });

    function deleterecord(){
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