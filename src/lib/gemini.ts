import { GoogleGenerativeAI } from '@google/generative-ai';
 
const API_KEY: string = import.meta.env.VITE_GEMINI_API_KEY as string;
 
if (!API_KEY) {
  throw new Error(
    'VITE_GEMINI_API_KEY is not set. Check your .env file.'
  );
}
 
const genAI = new GoogleGenerativeAI(API_KEY);
 
export const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});