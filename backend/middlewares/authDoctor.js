import jwt from 'jsonwebtoken'

//doctor authentication middleware

const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers;
        console.log("Raw dToken from header:", dtoken); 

        if (!dtoken) {
            return res.json({ success: false, message: 'Not authorized. Login again!' });
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
        console.log("Decoded token:", token_decode); 

        req.docId = token_decode.id;
        console.log("Set req.docId to:", req.docId);  

        next();
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

export default authDoctor