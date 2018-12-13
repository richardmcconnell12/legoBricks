const eventListeners = {
    handleFormSubmission () {
        //Get input values from form
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const color = document.querySelector("#lego__color").value;
        const shape = document.querySelector("#lego__shape").value;
        
        //Create an object to represent a lego
        const legoToSave = {
        creatorName: creator,
        legoName: name,
        legoColor: color,
        legoShape: shape
       }
    //    console.log("lego to save", legoToSave);

    // Post to API and pass legoToSave 
      data.postLego(legoToSave);
    }
};