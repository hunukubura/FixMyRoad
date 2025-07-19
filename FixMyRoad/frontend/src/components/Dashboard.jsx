import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import MapView from './MapView';

const Dashboard = () => {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const response = await fetch('/api/reports'); // Adjust the API endpoint as necessary
                const data = await response.json();
                setReportData(data);
            } catch (error) {
                console.error('Error fetching report data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReportData();
    }, []);

    const getStatusCounts = () => {
        const counts = { pending: 0, inProgress: 0, resolved: 0 };
        reportData.forEach(report => {
            if (report.status === 'Pending') counts.pending++;
            else if (report.status === 'In Progress') counts.inProgress++;
            else if (report.status === 'Resolved') counts.resolved++;
        });
        return counts;
    };

    const statusCounts = getStatusCounts();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <PieChart statusCounts={statusCounts} />
            <MapView reports={reportData} />
        </div>
    );
};

export default Dashboard;