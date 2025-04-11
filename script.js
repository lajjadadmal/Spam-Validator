function checkSpam() {
    const spamWords = ["win", "free", "prize", "click here", "subscribe", "lottery", "congratulations", "limited offer"];
    const trustedWords = ["bank", "official", "customer support", "transaction", "invoice", "receipt", "payment", "account", "support team", "confirmation", "service", "order", "genuine"];

    const emailText = document.getElementById("emailText").value.toLowerCase();
    let spamCount = 0;
    let trustedCount = 0;

    // Check for spam words
    spamWords.forEach(word => {
        if (emailText.includes(word)) {
            spamCount++;
        }
    });

    // Check for trusted words
    trustedWords.forEach(word => {
        if (emailText.includes(word)) {
            trustedCount++;
        }
    });

    let resultElement = document.getElementById("result");
    let resultBox = document.querySelector(".result-container");

    if (spamCount > 2 && trustedCount === 0) {
        resultElement.innerText = "🚨 This email is likely SPAM!";
        resultBox.className = "result-container spam";
    } else if (spamCount > 0 && trustedCount > 0) {
        resultElement.innerText = "⚠ Email contains spam words but may be from a trusted source. Verify sender.";
        resultBox.className = "result-container warning";
    } else {
        resultElement.innerText = "✅ This email seems SAFE!";
        resultBox.className = "result-container safe";
    }
}
