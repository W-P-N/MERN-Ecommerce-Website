const productModel = require("../../models/productModel")

const deleteProductController = async(req,res)=>{
    try{
        const id = req.body;
        const deleteProduct = await productModel.findByIdAndDelete(id)
        if(deleteProduct)
        {
            res.status(200).json({
                success : true,
                error : false
            })
        }
        else{
            res.status(400).json({
                message: err.message
            })
        }

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = deleteProductController;