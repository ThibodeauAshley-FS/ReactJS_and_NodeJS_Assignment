// Functions for Controlling Routes
const mongoose = require("mongoose");
const Painting = require('../models/painting');
const messages = require("../messages/messages");
const errorMessage = require("../messages/errorMessage");


exports.getPainting = async (req, res ) => {
    Painting.find()
    .select("name info _id")
    .populate("info")
    .exec()
    .then( painting => {
        // if null return a message
        if (!painting){
            return errorMessage(res,err,messages.empty_database,404);
        }
       
            res.status(200).json({
                painting: painting,
                metadata: {
                    method: `${req.method} - All Painting Request Made`,
                    host: req.hostname
                }
            })
        
    })
    .catch(err => {
        return errorMessage(res,err,err.mesage,500);
    })
}

exports.getPaintingByID = async (req, res ) => {
    const {id} = req.params;
    Painting.findById(id)

    .select("name info _id")
    .populate("info")
    .exec()
    .then( painting => {
        // if null return a message
        if (!painting){
            return errorMessage(res,err,messages.painting_not_found,404);
        }

            res.status(201).json({
                painting: painting
            })
        
    })
    .catch(err => {
        return errorMessage(res,err,err.mesage,500);
    });
};
exports.createPainting = async (req, res ) =>{
    Painting.find({
        name: req.body.name
    })
    .exec()
    .then(result => {
        console.log(result);
        if (result.length >0 ){
            return res.status(406).json({
                message: messages.duplicate_item
            })
        }
        const newPainting = new Painting({
            _id: new mongoose.Types.ObjectId(),
            info: req.body.info,
            name: req.body.name
        });
        newPainting.save()
        .then(result => {
            console.log(result);

            res.status(200).json({
                message: "Painting Added",
                Painting: {
                    id: result._id,
                    info: {
                        painting: result.info.name,
                        artist:result.info.artist
                    },
                    name: result.name
                },
                metadata: {
                    method: req.method,
                    host: req.hostname
                }
            })
        })




    })
    .catch(err => {
        return errorMessage(res,err,err.mesage,500);
    });
};

exports.updatePainting = async (req, res ) => {
    const {id} = req.params;
    Painting.findById(id)
    .exec()
    .then( painting => {
        if (!painting){
            console.log(painting);
            return res.status(404).json({
                message: messages.painting_not_found,
            })
        }

        Painting.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
    
        res.status(200).json({
            data: painting,
            status: "success ",
            message: `${req.method} - by ID made`,
        });

    })
    .catch(err => {
        return errorMessage(res,err,err.mesage,500);
    });

}
exports.deletePainting = async (req, res ) => {
    const {id} = req.params;
    Painting.findById(id)
    .exec()
    .then( painting=> {
        if (!painting){
            return errorMessage(res,err,messages.painting_not_found,404);
        }

        Painting.deleteOne({
            _id: id
        })
        .exec()
        .then( result => {
            res.status(200).json({
                message: "Painting Deleted",
                resquest: {
                    method: "DELETE",
                    url: "http://localhost:3000/painting/", id
                }
            })
        })

    })
    .catch(err => {
        return errorMessage(res,err,err.mesage,500);
    });
};