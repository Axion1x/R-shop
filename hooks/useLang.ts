"use client"

import React from 'react';
import translationsJson from '@/public/translations/translations.json'
import {useSelector} from "react-redux";

export const useLang = () => {
   const lang = useSelector((state)=>state.lang.currentLanguage)
   const translations = translationsJson;
   return {lang, translations};
};
