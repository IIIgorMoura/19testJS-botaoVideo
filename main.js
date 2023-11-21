const video = document.getElementById('spaceVideo');
const barraProgresso = document.getElementById('progresso');

video.onloadedmetadata = function() {
    console.log('Duração do vídeo:', video.duration, 'segundos');
};

video.addEventListener('timeupdate', function() {
    const progresso = (video.currentTime / video.duration) * 100;
    barraProgresso.style.width = progresso + '%';
});
