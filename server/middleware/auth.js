import jwt from 'jsonwebtoken'

export const Auth=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        const tokenlength=token.length;
        let decodedData;
        if(token && tokenlength<500){
             decodedData=jwt.verify(token,'test')
            req.userId=decodedData?.id
        }else{
            decodedData=jwt.decode(token);
            req.userId=decodedData?.sub
        } 
        next();
    } catch (error) {
        console.log(error)
    }
}