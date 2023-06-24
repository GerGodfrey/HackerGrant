import { Octokit } from "@octokit/rest";

// GITHUB 

async function getGithubInfo(owner){
  console.log("Obteniendo información de GitHub...")
    let jsonData = {}

    const octokit = new Octokit({
      auth : "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"
    })

    console.log(octokit)

    try {
        const response = await octokit.request(`GET /users/${owner}`);
        const data = response.data
        jsonData.user_name = data.login
        jsonData.followers = data.followers
        jsonData.following = data.following
        jsonData.public_repos = data.public_repos
        jsonData.location = data.location
        jsonData.updated_at = data.updated_at

        try {
            const response2 = await octokit.request(`GET /users/${owner}/repos`);
            const data2 = response2.data
      
            let languageSet = new Set();
            let sizeSum = 0;
          
            for (let i = 0; i < data2.length; i++) {
              const elemento = data2[i];
              if (elemento.language) {
                languageSet.add(elemento.language);
              }
              sizeSum += elemento.size;
            }
          
            const languageString = Array.from(languageSet).join(', ');
            jsonData.programing_languages = languageString
            jsonData.code_size = sizeSum
            return jsonData

          } catch (error) {
            console.log("Error al obtener los repositorios de GitHub:", error);
            throw error;
          }
        
      } catch (error) {
        console.log("Error al obtener los repositorios de GitHub:", error);
        throw error;
      }
}


export {getGithubInfo}