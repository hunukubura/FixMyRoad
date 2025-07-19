class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }

    async createReport(req, res) {
        try {
            const reportData = req.body;
            const newReport = await this.reportService.create(reportData);
            res.status(201).json(newReport);
        } catch (error) {
            res.status(500).json({ message: 'Error creating report', error });
        }
    }

    async getReports(req, res) {
        try {
            const reports = await this.reportService.getAll();
            res.status(200).json(reports);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving reports', error });
        }
    }

    async updateReport(req, res) {
        try {
            const reportId = req.params.id;
            const updatedData = req.body;
            const updatedReport = await this.reportService.update(reportId, updatedData);
            res.status(200).json(updatedReport);
        } catch (error) {
            res.status(500).json({ message: 'Error updating report', error });
        }
    }

    async deleteReport(req, res) {
        try {
            const reportId = req.params.id;
            await this.reportService.delete(reportId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting report', error });
        }
    }
}

export default ReportController;