class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode;
    }
}

export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Internal server error"
    err.statusCode=err.statusCode || 500;

    if(err.name==="CaseError"){
        const message=`Resource not found Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    if(err.name==="11000"){
        const message=`Resource not found Invalid ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }

    if(err.name==="JSONWebTokenError"){
        const message=`JSON Web Token is Invalid Try Again`;
        err = new ErrorHandler(message,400);
    }

    if(err.name==="TokenExpiredError"){
        const message=`JSON Web Token is Expired Try Again`;
        err = new ErrorHandler(message,400);
    }

    return res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
}

export default ErrorHandler;