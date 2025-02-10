document.addEventListener("DOMContentLoaded", () => {
    const flashScreen = document.getElementById("flash-screen");
    const mainContainer = document.getElementById("main-container");
    const claimBonusBtn = document.getElementById("claim-bonus");
    const bonusMessage = document.getElementById("bonus-message");
    const convertBtn = document.getElementById("convert");
    const coinsDisplay = document.getElementById("coins");
    const tokensDisplay = document.getElementById("tokens");
    const playSpinBtn = document.getElementById("play-spin");
    const spinWheel = document.getElementById("spin-wheel");
    const spinBtn = document.getElementById("spin");
    const spinResult = document.getElementById("spin-result");

    // Flash Screen Timeout
    setTimeout(() => {
        flashScreen.style.display = "none";
        mainContainer.classList.remove("hidden");
    }, 3000);

    // Daily Bonus Claim
    claimBonusBtn.addEventListener("click", () => {
        let bonus = Math.floor(Math.random() * 100) + 50;
        coinsDisplay.textContent = parseInt(coinsDisplay.textContent) + bonus;
        bonusMessage.textContent = `You received ${bonus} MetaRush Coins!`;
        claimBonusBtn.disabled = true;
    });

    // Wallet Conversion
    convertBtn.addEventListener("click", () => {
        let coins = parseInt(coinsDisplay.textContent);
        if (coins >= 100) {
            coinsDisplay.textContent = coins - 100;
            tokensDisplay.textContent = parseInt(tokensDisplay.textContent) + 1;
        } else {
            alert("Not enough MetaRush Coins!");
        }
    });

    // Show Spin Wheel
    playSpinBtn.addEventListener("click", () => {
        spinWheel.classList.toggle("hidden");
    });

    // Spin Wheel Functionality
    spinBtn.addEventListener("click", () => {
        let prizes = [150, 200, 250, 300, 350, 400, "JACKPOT"]; 
        let prize = prizes[Math.floor(Math.random() * prizes.length)];
        
        if (prize === "JACKPOT") {
            spinResult.textContent = "🎉 JACKPOT! You won 150 MetaVerse Tokens!";
            tokensDisplay.textContent = parseInt(tokensDisplay.textContent) + 150;
        } else {
            spinResult.textContent = `🎊 You won ${prize} MetaRush Coins!`;
            coinsDisplay.textContent = parseInt(coinsDisplay.textContent) + prize;
        }
    });
});
