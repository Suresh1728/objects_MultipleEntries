function getObject(inputObject) {
    const outputObject = {};
    const marksSet = new Set();
    const sortedMarks = [];

    for (const key in inputObject) {
        const marks = inputObject[key]["marks"];

        if (!marksSet.has(marks)) {
        outputObject[marks] = inputObject[key];
        marksSet.add(marks);
        sortedMarks.push(marks);
        } else {
        const currentValue = outputObject[marks];
        if (inputObject[key]["age"] > currentValue["age"]) {
            outputObject[marks] = inputObject[key];
        }
        }
    }

    sortedMarks.sort((a, b) => b - a);

    const outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML = ""; // Clear previous content

    for (const marks of sortedMarks) {
        const outputItem = document.createElement("p");
        outputItem.textContent = JSON.stringify(outputObject[marks]);
        outputDiv.appendChild(outputItem);
    }
    }

    const inputObject = {
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
    };

    getObject(inputObject);

