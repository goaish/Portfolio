let questionCounter = 1;

function addQuestion(type) {
    const container = document.getElementById("form-container");
    const questionId = `question-${questionCounter++}`;

    let questionHTML = `
        <div id="${questionId}" class="question-container">
            <input type="text" class="w-full p-2 border-b focus:outline-none focus:border-purple-500 transition" placeholder="Question title">
    `;

    if (type === "mcq" || type === "checkbox") {
        questionHTML += `
            <div class="options mt-2">
                <input type="text" class="option-input w-full p-1 border-b my-2 focus:border-purple-500 transition" placeholder="Option 1">
                <input type="text" class="option-input w-full p-1 border-b my-2 focus:border-purple-500 transition" placeholder="Option 2">
                <button onclick="addOption('${questionId}')" class="btn mt-2">Add Option</button>
            </div>
        `;
    }

    questionHTML += `
            <span class="delete-btn" onclick="deleteQuestion('${questionId}')">Remove</span>
        </div>
    `;

    container.innerHTML += questionHTML;
}

function addOption(questionId) {
    const questionDiv = document.getElementById(questionId);
    const optionsContainer = questionDiv.querySelector(".options");

    const newOption = document.createElement("input");
    newOption.type = "text";
    newOption.className = "option-input w-full p-1 border-b my-2 focus:border-purple-500 transition";
    newOption.placeholder = `Option ${optionsContainer.children.length - 1}`;

    optionsContainer.insertBefore(newOption, optionsContainer.lastElementChild);
}

function deleteQuestion(id) {
    document.getElementById(id).remove();
}

function submitForm() {
    alert("Form Submitted Successfully!");
}
