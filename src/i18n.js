import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // Español como idioma base
    debug: true,
    interpolation: {
      escapeValue: false, // React ya se encarga de evitar XSS
    },
    resources: {
      es: {
        translation: {
          title: 'XlComp',
          phrase: '¡Analiza tus archivos con un click!',
          buttonGo: '¡Vamos!',
          buttonCompare: 'Comparar',
          buttonFunc2: 'Función 2',
          buttonFunc3: 'Función 3',
          buttonFunc4: 'Función 4',
          buttonCancel: 'Cancelar',
          buttonHome: "Inicio",
          compareTitle: "Comparar Archivos",
          descriptionFileUpload: "Sube dos archivos Excel(.xlsx), y compara sus diferencias",
          noteDescription: "Nota: El primer archivo servirá como base para el segundo",
          uploadFile1: "Subir Archivo 1",
          file1Uploaded: "Archivo 1 Subido",
          uploadFile2: "Subir Archivo 2",
          file2Uploaded: "Archivo 2 Subido",
          compareResults: "Compare Results:",
          downloadFile: "Descargar Archivo"
        },
      },
      en: {
        translation: {
          title: 'XlComp',
          phrase: 'Analyze your files with a click!',
          buttonGo: 'Let\'s Go!',
          buttonCompare: 'Compare',
          buttonFunc2: 'Function 2',
          buttonFunc3: 'Function 3',
          buttonFunc4: 'Function 4',
          buttonCancel: 'Cancel',
          buttonHome: "Home",
          compareTitle: "Compare Files",
          descriptionFileUpload: "Upload two Excel (.xlsx) files and compare their differences",
          noteDescription: "Note: The first file will serve as the base for the second",
          uploadFile1: "Upload File 1",
          file1Uploaded: "File 1 Uploaded",
          uploadFile2: "Upload File 2",
          file2Uploaded: "File 2 Uploaded",
          compareResults: "Compare Results:",
          downloadFile: "Download File"
        },
      },
    },
  });

export default i18n;