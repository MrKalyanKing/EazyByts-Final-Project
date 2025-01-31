import { bookingModel } from "../Models/booking.js"



const booking= async (req,res)=>{
   const {name,email,category,time,guest,AMPM}=req.body
  // console.log(name,email,category,time,guest,AMPM)
   try{
  const book =  new bookingModel({
     name:name,
     email:email,
     category:category,
     time:time,
     AMPM:AMPM,
     guests:Number(guest)||0
  })
  const data= await book.save()

  res.status(200).json({success:true,message:"Booked Event!",data:data})
}
catch(err){
    res.status(500).json({success:false,message:"Event Booking Failed !",err})
}

}

export {booking}