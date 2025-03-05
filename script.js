// 獲取下雨容器
const rainContainer = document.getElementById("rain-container");

// 設置雨滴數量
const numberOfRaindrops = 300;

// 創建雨滴函數
function createRaindrop() {
    const raindrop = document.createElement("div");
    raindrop.classList.add("rain-drop");

    // 隨機化雨滴的位置
    const startX = Math.random() * window.innerWidth; // 水平隨機位置
    raindrop.style.left = `${startX}px`;

    // 隨機化雨滴的掉落時間，讓每顆雨滴掉落的速度不同
    const duration = Math.random() * 2 + 2; // 雨滴掉落時間介於 2 到 4 秒之間
    raindrop.style.animationDuration = `${duration}s`;

    // 將雨滴添加到容器中
    rainContainer.appendChild(raindrop);

    // 移除雨滴以避免不必要的元素堆積
    setTimeout(() => {
        raindrop.remove();
    }, duration * 1000); // 等到動畫結束後將雨滴移除
}

// 每 100 毫秒創建一顆雨滴
setInterval(createRaindrop, 100);
