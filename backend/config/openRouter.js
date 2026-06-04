export const generateResponse = async (prompt) => {
    try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'deepseek/deepseek-chat', // ✅ Use valid model
                messages: [
                    {
                        role: 'system',
                        content: 'You must return only raw json'
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                temperature: 0.2,
            }),
        });
        
        if (!res.ok) {
            const err = await res.json();
            throw new Error(`OpenRouter error: ${err.error.message}`);
        }
        
        const data = await res.json();
        return data.choices[0].message.content;
        
    } catch (error) {
        console.error("Error in generateResponse:", error);
        throw error;
    }
}