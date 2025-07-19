import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('/api/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    const handleStatusUpdate = async (reportId, newStatus) => {
        try {
            await axios.put(`/api/reports/${reportId}`, { status: newStatus });
            setReports(reports.map(report => 
                report.id === reportId ? { ...report, status: newStatus } : report
            ));
        } catch (error) {
            console.error('Error updating report status:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b p-2">ID</th>
                        <th className="border-b p-2">Description</th>
                        <th className="border-b p-2">Status</th>
                        <th className="border-b p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td className="border-b p-2">{report.id}</td>
                            <td className="border-b p-2">{report.description}</td>
                            <td className="border-b p-2">{report.status}</td>
                            <td className="border-b p-2">
                                <button 
                                    onClick={() => handleStatusUpdate(report.id, 'Resolved')}
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                >
                                    Resolve
                                </button>
                                <button 
                                    onClick={() => handleStatusUpdate(report.id, 'In Progress')}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded ml-2"
                                >
                                    In Progress
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;