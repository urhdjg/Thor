document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawThor() {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Thor Adventure Game Loading...", 50, 50);
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawThor();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});