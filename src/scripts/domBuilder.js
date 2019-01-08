const domBuilder = {
    appendInputForm() {
        let selectOptions = "";
        data.getColors()
            .then(parsedColors => {
                parsedColors.forEach(color => {
                    selectOptions += `<option value="${color.color}">${color.color}</option>`
                    // console.log(color.color)
                    return selectOptions;
                })

                let inputForm = `
        <article>
            <fieldset>
            <label for="lego__creator">Creator:</label>
            <input id="lego__creator" name="lego__creator" type="text" autofocus />
            </fieldset>
            <fieldset>
            <label for="lego__name">Name:</label>
            <input id="lego__name" name="lego__name" type="text" autofocus />
            </fieldset>
            <fieldset>
            <label for="lego__shape">Shape:</label>
            <input id="lego__shape" name="lego__shape" type="text" autofocus />
            </fieldset>
            <fieldset>
            <label for="lego__color">Color:</label>
            <select id="lego__color">${selectOptions}</select>
            </fieldset>
        </article>
        `

                let displayContainer = document.querySelector("#display-container");
                displayContainer.innerHTML = inputForm;
                let saveButton = document.createElement("button");
                saveButton.textContent = "Save Lego"
                saveButton.classList.add = ("#saveButton")
                    
                saveButton.addEventListener("click", eventListeners.handleFormSubmission);
                displayContainer.appendChild(saveButton);
            })
    }
};