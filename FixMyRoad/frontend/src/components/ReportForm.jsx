import React, { useState } from 'react';

const ReportForm = () => {
    const [issue, setIssue] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('en');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reportData = { issue, location, description, language };

        try {
            const response = await fetch('/api/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reportData),
            });

            if (response.ok) {
                alert('Report submitted successfully!');
                setIssue('');
                setLocation('');
                setDescription('');
            } else {
                alert('Failed to submit report. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting report:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Report a Road Issue</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Issue Type</label>
                <input
                    type="text"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Language</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded p-2"
                >
                    <option value="en">English</option>
                    <option value="si">Sinhala</option>
                    <option value="ta">Tamil</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">
                Submit Report
            </button>
        </form>
    );
};

export default ReportForm;