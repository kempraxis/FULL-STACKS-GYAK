

// For getting all users from the database
export const fetch = async (req, res)=>{
    try {
        
        return res.json("Hello world")
    } catch (error) {
        // Handle any errors and send an internal server error response
        res.status(500).json({error : " Internal Server Error. "})
    }
}
