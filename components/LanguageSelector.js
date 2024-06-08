'use client'

import { useState } from "react";

const LanguageSelector = (props) => {
    const languages = [
        {language: "Arabic", emoji: "🇸🇦", code: "ar"},
        {language: "Bulgarian", emoji: "🇧🇬", code: "bg"},
        {language: "Czech", emoji: "🇨🇿", code: "cs"}, 
        {language: "Danish", emoji: "🇩🇰", code: "da"},
        {language: "German", emoji: "🇩🇪", code: "de"},
        {language: "Greek", emoji: "🇬🇷", code: "el"},
        {language: "English", emoji: "🇬🇧", code: "en"},
        {language: "Spanish", emoji: "🇪🇸", code: "es"},
        {language: "Estonian", emoji: "🇪🇪", code: "et"},
        {language: "Finnish", emoji: "🇫🇮", code: "fi"},
        {language: "French", emoji: "🇫🇷", code: "fr"},
        {language: "Hungarian", emoji: "🇭🇺", code: "hu"},
        {language: "Indonesian", emoji: "🇮🇩", code: "id"},
        {language: "Italian", emoji: "🇮🇹", code: "it"},
        {language: "Japanese", emoji: "🇯🇵", code: "ja"},
        {language: "Korean", emoji: "🇰🇷", code: "ko"},
        {language: "Lithuanian", emoji: "🇱🇹", code: "lt"},
        {language: "Latvian", emoji: "🇱🇻", code: "lv"},
        {language: "Norwegian Bokmål", emoji: "🇳🇴", code: "nb"},
        {language: "Dutch", emoji: "🇳🇱", code: "nl"},
        {language: "Polish", emoji: "🇵🇱", code: "pl"},
        {language: "Portuguese", emoji: "🇵🇹", code: "pt"},
        {language: "Romanian", emoji: "🇷🇴", code: "ro"},
        {language: "Russian", emoji: "🇷🇺", code: "ru"},
        {language: "Slovak", emoji: "🇸🇰", code: "sk"},
        {language: "Slovenian", emoji: "🇸🇮", code: "sl"},
        {language: "Swedish", emoji: "🇸🇪", code: "sv"},
        {language: "Turkish", emoji: "🇹🇷", code: "tr"},
        {language: "Ukrainian", emoji: "🇺🇦", code: "uk"},
        {language: "Mandarin", emoji: "🇨🇳", code: "zh-Hans"}
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(null);

    return (
        <div>
            {languages.map((lang, index) => (
                <button 
                    key={index} 
                    className={`btn btn-neutral m-2 ${selectedLanguage === lang.language ? 'bg-accent text-gray-900' : 'hover:bg-accent hover:text-gray-900'}`}
                    onClick={() => {
                        setSelectedLanguage(lang.language)
                        props.setLanguageCode(lang.code)
                    }}
                >
                    {lang.language} {lang.emoji}
                </button>
            ))}
        </div>
    )
}

export default LanguageSelector;