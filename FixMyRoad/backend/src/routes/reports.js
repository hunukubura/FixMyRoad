const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/reportController');

const reportController = new ReportController();

// Route to create a new report
router.post('/', reportController.createReport);

// Route to get all reports
router.get('/', reportController.getAllReports);

// Route to get a report by ID
router.get('/:id', reportController.getReportById);

// Route to update a report by ID
router.put('/:id', reportController.updateReport);

// Route to delete a report by ID
router.delete('/:id', reportController.deleteReport);

module.exports = router;