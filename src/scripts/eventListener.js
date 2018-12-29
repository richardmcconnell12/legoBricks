const eventListeners = {
    handleFormSubmission() {
        //Get input values from form
        const creator = document.getElementById("lego__creator").value;
        const name = document.getElementById("lego__name").value;
        const shape = document.getElementById("lego__shape").value;
        const color = document.getElementById("lego__color").value;

        //Create an object to represent a lego
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoShape: shape,
            legoColor: color
        }
        data.postLego(legoObject);
    },
}