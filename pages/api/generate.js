import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const ingredient = req.body.ingredient || '';
  if (ingredient.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Por favor digite ingredientes validos",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePromptFoodRecipes(ingredient),
      temperature: 0.6,
      max_tokens:  2048,
      n:1,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}


function generatePromptFoodRecipes(ingredientes) {
  const capitalizedIngredientes =
  ingredientes[0].toUpperCase() + ingredientes.slice(1).toLowerCase();
  return `Crie uma receita criativa com os seguintes ingredientes: ${capitalizedIngredientes}.Depois de um nome a essa receita`;
}


