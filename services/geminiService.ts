
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAuditInsights = async (logs: any[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analiza la siguiente bitácora de eventos de un condominio en Chile y genera un resumen ejecutivo de 3 puntos sobre la actividad reciente, destacando anomalías o patrones importantes de seguridad y gastos: ${JSON.stringify(logs)}`,
      config: {
        systemInstruction: "Eres un auditor experto en copropiedad inmobiliaria chilena (Ley 21.442). Tu tono es profesional y analítico."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    return "No se pudo generar el resumen de auditoría en este momento.";
  }
};

export const explainExpenseStructure = async (expenseData: any) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explica de forma sencilla para un residente cómo se calculó su gasto común basado en estos datos: ${JSON.stringify(expenseData)}. Menciona el prorrateo y las categorías principales.`,
    });
    return response.text;
  } catch (error) {
    return "Explicación no disponible.";
  }
};
