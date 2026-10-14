const contactforme =document.getElementById("contactforme");
console.log("ygfxdj");
if(contactforme){
    contactforme.addEventListener("submit",function(event){
        event.preventDefault();
        const name=document.getElementById("contactName")?.value.trim();
        const phone=document.getElementById("contactPhone")?.value.trim();
        const email=document.getElementById("contactEmail")?.value.trim().toLowerCase();
        const note=document.getElementById("contactNote")?.value.trim();
      //بررسی کردن انپوت ها
        if(!name || !phone ||!email){
            Swal.fire({
                icon:"warning",
                title:"Missing Information",
                text:"Please complete all required field",
                confirmButtonText: "Ok",
                confirmButtonColor: "#FF5500"
                
            });
            return;
        }
        //بررسی کردن تعداد عدد نمبر تیلفون
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
        //بررسی کزرن اعتبار ایمیل
        if(!email.includes("@")||!email.includes(".")){
            Swal.fire({
                icon:"error",
                title:"Invalid Email",
                text:"Please enter a valid email address",
                confirmButtonText:"Try Again",
                confirmButtonColor:"#FF5500"
            });
            return;
        }
        //ساختن مسج
        const newMessage={
            id:name,
            name:name,
            phone:phone,
            email:email,
            note:note,
           createdAt: new Date().toISOString(),


        };
        //گرفتن دیتا وذخیره در لوکل استوریج
        const messages=JSON.parse(localStorage.getItem("aw-messages"))||[];
        messages.push(newMessage);
        localStorage.setItem("aw-messages",JSON.stringify(messages));
        //اعلامیه موفقیت هانه پری
         Swal.fire({
                icon:"success",
                title:"Message Send",
                text:`Thank you ${name}.An advisor will call you shortly.`,
                confirmButtonText: "Ok",
                confirmButtonColor: "#FF5500"
    }).then(()=>{
        contactforme.reset();
    });
    });
}