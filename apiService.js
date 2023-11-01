import axios from "axios";

const API_BASE_URL =
  "https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/getModelsPipeline";
const API_KEY = "28395e2630-740a-4e89-9738-ea1a9648f14c";

const translateText = async (sourceText, sourceLanguage, targetLanguage) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/ulca/apis/v0/translate`,
      {
        text: sourceText,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.translatedText;
  } catch (error) {
    // Handle errors here, e.g., log the error or throw a custom error
    console.error("Translation error:", error);
    throw error; // You can choose to throw the error or handle it as needed
  }
};

export { translateText };
