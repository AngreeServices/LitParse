window.prompt = function (message) {
    return new Promise((resolve) => {
        const result = window.prompt(message);
        resolve(result);
    });
};