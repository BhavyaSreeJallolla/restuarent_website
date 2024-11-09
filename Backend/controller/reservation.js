import ErrorHandler from '../middlewares/error.js';
import {Reservation} from '../models/reservation.js';
const send_reservation =async (req,res,next)=>{

    const {firstName,lastName,email,date,time,phone} =req.body;

    if(!firstName || !lastName || !email || !date || !time || !phone){
        return next (new ErrorHandler("Please Fill Full Reservation !",400));
    }

    try {
        await send_reservation.create({firstName,lastName,email,date,time,phone});
        res.status(201).json({
            success:true,
            message:"Reservation Sent Successfully!",
        });
    } catch (error) {
                //  Handle Mongoose Validation errors
                if(error.name ==='ValidationError'){

                    const ValidationErrors =Object.values(error.error).map(err=>err.message);
                    return next(new ErrorHandler(ValidationErrors.join(','),400));
                }

                //Handle other errors
        
    }
};


export default send_reservation;