const reserveform = document.getElementById("reserveform");
if(reserveform){
    reserveform.addEventListener("submit",function(event){
        event.preventDefault();
        const name = document.getElementById("reservename").value.trim();
        const phone =document.getElementById("reservephone").value.trim();
        const car = document.getElementById("reserveCar").value;
        const Note = document.getElementById("reservenote").value.trim();


      if(!name||!phone||!car){
    Swal.fire({
        icon: "Warning",
        title: "Missing",
        text: "Please complete all required fields.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FF5500",
      });
      return;
}

     const namepattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
      if(!namepattern.test(name)){
        Swal.fire({
        icon: "error",
        title: "Invalid",
        text: "Name must contain English letters only.Number and symbols are not allowed.",
        confirmButtonText: "Try Agin",
        confirmButtonColor: "#FF5500",
      });
      return;
      }


      if(phone.length<9){
            Swal.fire({
                icon:"error",
                title:"Invalid Phone Number",
                text:"Phone number must be at least 9 digits",
                confirmButtonText:"Try Again",
                confirmButtonColor:"#FF5500"
            });
            return;
        }

        const newReservation={
            id:name,
            name:name,
            phone:phone,
            car:car,
            Note:Note,
            creatat:new Date().toISOString()


        };
        let reservations=JSON.parse(
                localStorage.getItem("aw-reservations")||"[]"
            );
            reservations.push(newReservation);
            localStorage.setItem("aw-reservations", JSON.stringify(reservations));

         Swal.fire({
                icon:"success",
                title:"Successfull",
                text:`Thank You ${name}!Your reservation request for ${car} has been saved`,
                confirmButtonText:"Try Again",
                confirmButtonColor:"#FF5500"
            })
            .then(()=>{
                reserveform.reset();
            });
            return;
    });
}
