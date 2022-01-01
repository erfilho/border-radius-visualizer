window.onload = () => {
    const textarea = document.getElementById("textarea")
    const top_left = document.getElementById("top-left-border")
    const top_right = document.getElementById("top-right-border")
    const bottom_left = document.getElementById("bottom-left-border")
    const bottom_right = document.getElementById("bottom-right-border")
    
    let borderTL = top_left.value + "%";
    let borderTR = top_right.value + "%";
    let borderBL = bottom_left.value + "%";
    let borderBR = bottom_right.value + "%";

    let res

    res = "-webkit-border-radius: "+ borderTL + " " + borderTR + " " + borderBR + " " + borderBL + "; \n"
    res += "-moz-border-radius: "+ borderTL + " " + borderTR + " " + borderBR + " " + borderBL + "; \n"
    res += "border-radius: "+ borderTL + " " + borderTR + " " + borderBR + " " + borderBL + "; \n"

    textarea.readOnly = true
    textarea.value = res
}

function copy(){
    const textarea = document.getElementById("textarea")

    textarea.select()
    textarea.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(textarea.value)
}

function changing(){
    let res
    const top_left = document.getElementById("top-left-border")
    const top_right = document.getElementById("top-right-border")
    const bottom_left = document.getElementById("bottom-left-border")
    const bottom_right = document.getElementById("bottom-right-border")
    const textarea = document.getElementById("textarea")
    const box = document.getElementById("border-box")

    console.log("Running")
    console.log(top_left.value)
    console.log(top_right.value)
    console.log(bottom_left.value)
    console.log(bottom_right.value)

    let borderTL = top_left.value + "%";
    let borderTR = top_right.value + "%";
    let borderBL = bottom_left.value + "%";
    let borderBR = bottom_right.value + "%";

    box.style.borderTopLeftRadius = borderTL
    box.style.borderTopRightRadius = borderTR
    box.style.borderBottomLeftRadius = borderBL
    box.style.borderBottomRightRadius = borderBR

    res = "-webkit-border-radius: "+ borderTL + " " + borderTR + " " + borderBR + " " + borderBL + "; \n"
    res += "-moz-border-radius: "+ borderTL + " " + borderTR + " " + borderBR + " " + borderBL + "; \n"
    res += "border-radius: "+ borderTL + " " + borderTR + " " + borderBR + " " + borderBL + "; \n"
    
    textarea.value = res
}
