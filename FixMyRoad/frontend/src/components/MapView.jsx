import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const MapView = ({ issues }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([7.2906, 80.6337], 8); // Centered on North Western Province

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        issues.forEach(issue => {
            L.marker([issue.latitude, issue.longitude])
                .addTo(map)
                .bindPopup(`<b>${issue.title}</b><br>${issue.description}`);
        });

        return () => {
            map.remove();
        };
    }, [issues]);

    return <div ref={mapRef} className="h-full w-full" style={{ height: '500px' }} />;
};

export default MapView;