import React, { useState } from "react";
import { translateText } from "./apiService";

function TranslationForm() {
  const [sourceText, setSourceText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetText, setTargetText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  const handleTranslation = async () => {
    try {
      const translatedText = await translateText(
        sourceText,
        sourceLanguage,
        targetLanguage
      );
      setTargetText(translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      setTargetText("Translation failed");
    }
  };

  return (
    <div>
      <h2>Language Translation</h2>
      <textarea
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
        placeholder="Enter text to translate"
        rows="10"
      />
      <select
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="bn">Bengali</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="mr">Marathi</option>
        {}
      </select>
      <textarea value={targetText} readOnly rows="10" />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="mr">Marathi</option>
        {}
      </select>
      <button onClick={handleTranslation}>Translate</button>
    </div>
  );
}

export default TranslationForm;
