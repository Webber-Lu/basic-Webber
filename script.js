// 獲取流星容器
const meteorContainer = document.getElementById("meteor-container");

// 設置流星數量
const numberOfMeteors = 300;

// 創建流星函數
function createMeteor() {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");

    // 隨機化流星大小
    const size = Math.random() * 3 + 2; // 流星大小介於 2px 到 5px 之間
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size}px`;

    // 隨機化流星起始位置
    const startX = Math.random() * window.innerWidth; // 水平隨機位置
    const startY = Math.random() * -100; // 垂直隨機位置在螢幕上方
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;

    // 隨機化流星掉落速度
    const duration = Math.random() * 3 + 2; // 流星的動畫時間介於 2 到 5 秒之間
    meteor.style.animationDuration = `${duration}s`;

    // 隨機化流星的角度
    const rotation = Math.random() * 360;
    meteor.style.transform = `rotate(${rotation}deg)`; // 隨機旋轉角度

    // 加入流星到容器中
    meteorContainer.appendChild(meteor);

    // 移除流星以避免不必要的元素堆積
    setTimeout(() => {
        meteor.remove();
    }, duration * 1000); // 等到動畫結束後將流星移除
}

// 每 100 毫秒創建一顆流星
setInterval(createMeteor, 100);

