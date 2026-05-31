// Automatically load and swap the correct labels/inputs on choice change
function updateInputs() {
    let choice = document.getElementById("choice").value;
    let container = document.getElementById("input-container");
    document.getElementById("solution-box").style.display = "none";

    if (choice === "voltage") {
        container.innerHTML = `
            <label class="field-label">Current (I) in Amperes</label>
            <input type="number" id="current" placeholder="e.g. 2">
            <label class="field-label">Resistance (R) in Ohms</label>
            <input type="number" id="resistance" placeholder="e.g. 6">
        `;
    } else if (choice === "current") {
        container.innerHTML = `
            <label class="field-label">Voltage (V) in Volts</label>
            <input type="number" id="voltage" placeholder="e.g. 12">
            <label class="field-label">Resistance (R) in Ohms</label>
            <input type="number" id="resistance" placeholder="e.g. 6">
        `;
    } else if (choice === "resistance") {
        container.innerHTML = `
            <label class="field-label">Voltage (V) in Volts</label>
            <input type="number" id="voltage" placeholder="e.g. 12">
            <label class="field-label">Current (I) in Amperes</label>
            <input type="number" id="current" placeholder="e.g. 2">
        `;
    }
}

// Compute the mathematical result and render dynamic step logs
function calculate() {
    let choice = document.getElementById("choice").value;
    let solutionBox = document.getElementById("solution-box");
    let finalAnswer = document.getElementById("final-answer");
    let stepFormula = document.getElementById("step-formula");
    let stepSub = document.getElementById("step-substitution");
    let stepMath = document.getElementById("step-math");

    if (choice === "voltage") {
        let i = parseFloat(document.getElementById("current").value);
        let r = parseFloat(document.getElementById("resistance").value);
        
        if (isNaN(i) || isNaN(r)) { alert("Please enter both fields!"); return; }
        
        let v = i * r;
        finalAnswer.innerHTML = v.toFixed(2) + " Volts";
        stepFormula.innerHTML = "Formula: V = I × R";
        stepSub.innerHTML = "Substitution: V = " + i + " × " + r;
        stepMath.innerHTML = "Result: V = " + v.toFixed(2) + " V";

    } else if (choice === "current") {
        let v = parseFloat(document.getElementById("voltage").value);
        let r = parseFloat(document.getElementById("resistance").value);
        
        if (isNaN(v) || isNaN(r)) { alert("Please enter both fields!"); return; }
        if (r === 0) { alert("Error: Resistance cannot be zero!"); return; }
        
        let i = v / r;
        finalAnswer.innerHTML = i.toFixed(2) + " Amps";
        stepFormula.innerHTML = "Formula: I = V ÷ R";
        stepSub.innerHTML = "Substitution: I = " + v + " ÷ " + r;
        stepMath.innerHTML = "Result: I = " + i.toFixed(2) + " A";

    } else if (choice === "resistance") {
        let v = parseFloat(document.getElementById("voltage").value);
        let i = parseFloat(document.getElementById("current").value);
        
        if (isNaN(v) || isNaN(i)) { alert("Please enter both fields!"); return; }
        if (i === 0) { alert("Error: Current cannot be zero!"); return; }
        
        let r = v / i;
        finalAnswer.innerHTML = r.toFixed(2) + " Ω";
        stepFormula.innerHTML = "Formula: R = V ÷ I";
        stepSub.innerHTML = "Substitution: R = " + v + " ÷ " + i;
        stepMath.innerHTML = "Result: R = " + r.toFixed(2) + " Ω";
    }

    solutionBox.style.display = "block";
}

// Render fields immediately upon load
updateInputs();
