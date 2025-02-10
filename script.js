document.addEventListener("DOMContentLoaded", () => {
    const flashScreen = document.getElementById("flash-screen");
    const mainInterface = document.getElementById("main-interface");
    const claimBonusBtn = document.getElementById("claim-bonus");
    const bonusMessage = document.getElementById("bonus-message");
    const coinsDisplay = document.getElementById("coins");
    const tokensDisplay = document.getElementById("tokens");
    const convertBtn = document.getElementById("convert");
    const spinWheel = document.getElementById("spin-wheel");
    const spinBtn = document.getElementById("spin");
    const spinResult = document.getElementById("spin-result");
    const sections = document.querySelectorAll(".section");
    const navButtons = document.querySelectorAll(".nav-button");

    // Flash Screen Timeout
    setTimeout(() => {
        flashScreen.style.display = "none";
        mainInterface.style.display = "block";
    }, 3000);

    // Daily Bonus Claim
    claimBonusBtn.addEventListener("click", () => {
        let bonus = Math.floor(Math.random() * 100) + 50;
        coinsDisplay.textContent = parseInt(coinsDisplay.textContent) + bonus;
        bonusMessage.textContent = `You received ${bonus} MetaRush Coins!`;
        claimBonusBtn.disabled = true;
    });

    // Wallet Conversion (100 Coins = 1 Token)
    convertBtn.addEventListener("click", () => {
        let coins = parseInt(coinsDisplay.textContent);
        if (coins >= 100) {
            coinsDisplay.textContent = coins - 100;
            tokensDisplay.textContent = parseInt(tokensDisplay.textContent) + 1;
        } else {
            alert("Not enough MetaRush Coins!");
        }
    });

    // Spin Wheel Game
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

    // Bottom Navigation Handling
    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            sections.forEach((section) => section.classList.add("hidden"));
            document.getElementById(button.dataset.target).classList.remove("hidden");
        });
    });
});
