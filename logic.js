var getBtn = $("#get_btn")
var maxText = $("#max_text")
var userVal1 = $("#u_val_1")
var userVal2 = $("#u_val_2")
var userVal3 = $("#u_val_3")

getBtn.on('click', () => {

    let n1 = parseInt(userVal1.val()), n2 = parseInt(userVal2.val()), n3 = parseInt(userVal3.val())

    if (n1 > n2 && n1 > n3)
        maxText.html(n1)
    else if (n2 > n1 && n2 > n3)
        maxText.html(n2)
    else
        maxText.html(n3)

})
