document.querySelectorAll('[division]').
addEventListener('click', division)

// Function declaration
function division () {
    let fOp = +document.querySelector('[firstOp]').value  // + will help us convert any data type to a number.
    let output = document.querySelector('[output]')
    let sOp = +document.querySelector('[secOp]').value
    // Make a promise
    let myPromise = new Promise ((resolve, reject) => { // Make use of 'new' to create an object
        if ((fOp < 1) || (sOp < 1))
            reject ('You can\'t divide a number by zero')    
        else 
        resolve(fOp / sOp)     
    }) 
    myPromise.then(value => {      // 'then' is used when our Promise has been resolved.
        output.textContent = value
    })
        .catch(value => {
            output.textContent = value
        })
}