// 灵动岛组件获取
const dynamicIsland = document.getElementById('dynamicIsland');
const diCard = document.getElementById('diCard');
const diWaveform = document.getElementById('diWaveform');

let isIslandExpanded = false, islandAnimTimer;

function closeIslandCard() {
    diCard.classList.remove('is-open');
    dynamicIsland.style.transition = 'none'; 
    dynamicIsland.classList.remove('is-shrinking', 'jelly-shrink-anim');
    void dynamicIsland.offsetWidth; 
    dynamicIsland.classList.add('jelly-anim');
    isIslandExpanded = false;
    
    clearTimeout(islandAnimTimer);
    islandAnimTimer = setTimeout(() => {
        dynamicIsland.classList.remove('jelly-anim');
        dynamicIsland.style.transition = '';
    }, 450); 
}

function openIslandCard() {
    dynamicIsland.style.transition = 'none'; 
    dynamicIsland.classList.remove('jelly-anim');
    void dynamicIsland.offsetWidth; 
    dynamicIsland.classList.add('jelly-shrink-anim');
    
    diCard.classList.add('is-open');
    isIslandExpanded = true;
    
    clearTimeout(islandAnimTimer);
    islandAnimTimer = setTimeout(() => {
        dynamicIsland.classList.add('is-shrinking');
        dynamicIsland.classList.remove('jelly-shrink-anim');
        dynamicIsland.style.transition = '';
    }, 400); 
}

// 已按照要求实现解耦，移除音乐播放变量(isPlaying)的校验关联
dynamicIsland.addEventListener('click', () => {
    isIslandExpanded ? closeIslandCard() : openIslandCard();
});

document.addEventListener('click', (e) => {
    if (isIslandExpanded && !diCard.contains(e.target) && !dynamicIsland.contains(e.target)) {
        closeIslandCard();
    }
});