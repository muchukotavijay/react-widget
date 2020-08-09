import React, { useState, useEffect } from 'react';
import axios from 'axios';

const translateAPI = "https://translation.googleapis.com/language/translate/v2";
const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

export default ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debounceText, setDebounceText] = useState(translated);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(translateAPI, {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: apiKey
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debounceText])

    return (
        <div>
            <h1 className="ui header"> {translated} </h1>
        </div>
    );
};