const progressBarWidth = 1477;
const progressbar = document.getElementById("progressbar");
const progress = document.getElementById("progress");

var ignore = false;

function SetFilesTotal(total) {
  window.totalFiles = total;
}

function SetFilesNeeded(needed) {
  if (ignore) return;
  window.filesNeeded = needed;
  progressbar.style.width = `${
    ((window.totalFiles - window.filesNeeded) / window.totalFiles) *
    progressBarWidth
  }px`;
  const percentage =
    ((window.totalFiles - window.filesNeeded) / window.totalFiles) * 100;
  if (isNaN(percentage)) return;
  progress.innerHTML = `${Math.ceil(percentage)}%`;
}

function SetStatusChanged(status) {
  if (status == "Starting Lua...") {
    ignore = true;
    progress.innerHTML = "100%";
    progressbar.style.width = `${progressBarWidth}px`;
  }
}
