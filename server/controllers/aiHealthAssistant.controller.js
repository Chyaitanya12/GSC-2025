import { model } from '../config/groqMixtral.config.js';
import User from '../models/user.model.js';
import MedicalReport from '../models/medicalReport.model.js';

export const handleHealthQuery = async (req, res) => {
  try {
    const { message, userId } = req.body;

    // Fetch user medical data
    const user = await User.findById(userId);
    const recentReports = await MedicalReport.find({ userId }).sort({ createdAt: -1 }).limit(5);

    // Create enhanced prompt with context
    const prompt = `You are an AI health assistant. Provide helpful, accurate health guidance based on:

User Query: ${message}

User Context:
- Age: ${user?.age || 'Unknown'}
- Gender: ${user?.gender || 'Unknown'}
- Medical History: ${user?.medicalHistory?.join(', ') || 'None'}
- Recent Reports: ${recentReports.map(r => r.diagnosis).join(', ') || 'None'}

Guidelines:
1. Provide general health information and guidance
2. Suggest when to see a doctor
3. Never provide specific medical prescriptions
4. Include relevant lifestyle recommendations
5. Flag emergency symptoms if detected

Response:`;

    const response = await model.invoke(prompt);
    res.json({ response: response.content });
  } catch (error) {
    console.error('AI Health Assistant error:', error);
    res.status(500).json({ error: 'AI processing failed' });
  }
};
