
async function query_ia(data) {
    const response = await fetch(
        "https://ggbot-48h7.onrender.com/api/v1/prediction/cd11e13f-a01a-4f9a-884c-2850abe1ae25",
        {
            method: "POST",
            body: data
        }
    );
    const result = await response.json();
    return result;
}

export {query_ia}

