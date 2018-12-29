const domBuilder = {
    appendInputForm() {
        let selectOptions = "";
        data.getColors()
            .then(parsedColors => {
                parsedColors.forEach(color => {
                    selectOptions += `<option value="${color.name}">${color.id}</option>`
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
            <button class="btn lego__save">Save Lego Creation</button>
        </article>
        `

            let displayContainer = document.querySelector("#display-container");
            displayContainer.innerHTML = inputForm;
            let legoSaveButton = document.getElementById("lego__save");
            console.log(legoSaveButton)
            legoSaveButton.addEventListener("click", eventListeners.handleFormSubmission);
        })
    }
};