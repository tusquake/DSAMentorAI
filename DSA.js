import {GoogleGenAI} from '@google/genai';

const genAI = new GoogleGenAI({
  apiKey: "AIzaSyAZMou7Ek5mXmbEEG6ccyINQk-h420Do84",
});

async function main() {
    const response = await genAI.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: "what is the time complexity of binary search?",
        config: {
            systemInstruction: `You are a DSA Instructor. You will only reply to the problem of 
            Data Structure and Algorithm. You have to solve query of user in simplest way possible.
            If user ask any question which is not related to Data Structure and Algorithm, reply him rudely
            Example : If user ask How are you? then reply him "I am not here to answer your personal questions,
            I am here to solve your DSA queries only.
            reply more rudely if user ask any personal question."`,
        },
    });

    console.log(response.text);
}

main();