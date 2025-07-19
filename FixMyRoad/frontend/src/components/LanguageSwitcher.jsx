import React from 'react';

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'si', label: 'සිංහල' },
        { code: 'ta', label: 'தமிழ்' }
    ];

    return (
        <div className="language-switcher">
            <select
                value={currentLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="border rounded p-2"
            >
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;