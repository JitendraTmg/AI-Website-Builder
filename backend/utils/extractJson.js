

export const extractJson = async(text)=>{
    if(!text){
        return
    }

    const cleaned = text.replace(/'''json/g, '').replace(/'''/g, '').trim();

    const openBracket = cleaned.indexOf('{');
    const closeBracket = cleaned.lastIndexOf('}');

    if (openBracket === -1 || closeBracket === -1 || closeBracket <= openBracket) {
        throw new Error("Invalid JSON format");
    }

    const jsonString = cleaned.substring(openBracket, closeBracket + 1);

    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        throw new Error("Failed to parse JSON");
    }
}

