const progressBarWidth = 1477;
const progressbar = document.getElementById("progressbar");
const progress = document.getElementById("progress");

function SetFilesTotal(total) {
  window.totalFiles = total;
}

function SetFilesNeeded(needed) {
  window.filesNeeded = needed;
  progressbar.style.width = `${
    ((window.totalFiles - window.filesNeeded) / window.totalFiles) *
    progressBarWidth
  }px`;
  const percentage =
    ((window.totalFiles - window.filesNeeded) / window.totalFiles) * 100;
  progress.innerHTML = `${percentage.toFixed(2)}%`;
}
