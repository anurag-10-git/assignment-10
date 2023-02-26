const express = require('express');
const { createContacts, getContact, updateContact, deleteContact } = require('../controllers/contactController');

const router = express.Router();

router.post('/createContact', createContacts);
router.post('/getContact', getContact);
router.post('/updateContact', updateContact);
router.post('/deleteContact', deleteContact);

module.exports = router;