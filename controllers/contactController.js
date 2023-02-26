const Contact = require("../models/contactSchema");

exports.createContacts = async(req,res,next) => {
   
    const {first_name, last_name, email, mobile_number, data_store} = req.body;
   
    const contact = await Contact.create({first_name, last_name, email, mobile_number, data_store});

    if(contact) {
        res.status(201).json(contact)
    }else{
        res.status(400);
        throw new Error("Failed to create contact");
    }  
}

// to check use contact_id = 63fb968b414fe66b23490120 and data_store = DATABASE;

exports.getContact = async(req, res, next) => {
    const {contact_id , data_store} = req.body;

    const contact = await Contact.findOne({_id: contact_id, data_store})

    if(contact) {
        res.json({_id: contact._id, name: contact.first_name + " " + contact.last_name, mobile_number: contact.mobile_number ,email: contact.email, data_store: contact.data_store })
    }else {
        res.status(400);
        throw new Error("Failed to find contact"); 
    }
}

exports.updateContact = async(req, res, next) => {
    const {contact_id, new_email, new_mobile_number, data_store} = req.body;
    const updateContact = await Contact.findByIdAndUpdate(contact_id, {email: new_email, mobile_number: new_mobile_number}, {new : true});

    if(updateContact) {
        res.json(updateContact);
    }else {
        res.status(400);
        throw new Error("Failed to update contact"); 
    }
}


exports.deleteContact = async(req, res, next) => { 
    const {contact_id , data_store} = req.body;

    const deleteContact = await Contact.findByIdAndDelete(contact_id);

    if(deleteContact){
        res.json(deleteContact)
    }else {
        res.status(400);
        throw new Error("Failed to delete contact"); 
    }
}

