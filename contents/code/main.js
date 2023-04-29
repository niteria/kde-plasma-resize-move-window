// based on this work:
// https://www.reddit.com/r/kde/comments/7h6g8e/move_window_to_center_patch/

// checkout KWin scipting tutorial for details:
// https://techbase.kde.org/Development/Tutorials/KWin/Scripting
// https://develop.kde.org/docs/extend/plasma/kwin/api/

// execute in plasma-interactiveconsole --kwin to set up
// stolen and modified from https://github.com/ChaoticManifold/kde-plasma-resize-move-window/blob/master/contents/code/main.js

// keep_width in {true, false} : change current window's width?
// keep_height in {true, false} : change current window's height?
// width_per in [0,1] : fraction of current monitor's width
// height_per in [0,1] : fraction of current monitor's height
// width_per, height_per are ignored if width_per,height_per = true
// keep_x_pos in {true,false} : move the current window in x direction?
// keep_y_pos in {true,false} : move the current window in y direction?
// x_per,y_per in [0,1] : 0 is left/top edge and 1 is right/bottom edge
// x_per,y_per is ignored if keep_x_pos,keep_y_pos = false
function moveAndResizeCurrentWindow(keep_width, keep_height, width_per, height_per, keep_x_pos = true, keep_y_pos = true, x_per = 0, y_per = 0, screen = -1) {
	var win = workspace.activeClient;
    if (screen != -1) {
        workspace.sendClientToScreen(win, screen);
    }
    var maxArea = workspace.clientArea(KWin.MaximizeArea, win);
	var height = keep_height ? win.height : height_per * maxArea.height;
	var width = keep_width ? win.width : width_per * maxArea.width;
	var x_pos = keep_x_pos ? win.x : maxArea.x + x_per * (maxArea.width - width);
    var y_pos = keep_y_pos ? win.y : maxArea.y + y_per * (maxArea.height - height);

	win.geometry = {
		x: x_pos,
		y: y_pos,
		width: width,
		height: height,
	}
}


/* big monitor + 2 small
registerShortcut("Move current window to Zone 11", "Move current window to Zone 1", "Ctrl+Alt+1", function() {
  moveAndResizeCurrentWindow(false, false, 1, 1/2, false, false, 0, 0, 2);
});

registerShortcut("Move current window to Zone 2", "Move current window to Zone 2", "Ctrl+Alt+2", function() {
  moveAndResizeCurrentWindow(false, false, 1, 1/2, false, false, 0, 1, 2);
});

registerShortcut("Move current window to Zone 3", "Move current window to Zone 3", "Ctrl+Alt+3", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 0);
});

registerShortcut("Move current window to Zone 4", "Move current window to Zone 4", "Ctrl+Alt+4", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 1, 0, 0);
});

registerShortcut("Move current window to Zone 5", "Move current window to Zone 5", "Ctrl+Alt+5", function() {
  moveAndResizeCurrentWindow(false, false, 1, 1/2, false, false, 0, 0, 1);
});

registerShortcut("Move current window to Zone 6", "Move current window to Zone 6", "Ctrl+Alt+6", function() {
  moveAndResizeCurrentWindow(false, false, 1, 1/2, false, false, 0, 1, 1);
});

*/


/* 2 big monitors

registerShortcut("Move current window to Zone 1", "Move current window to Zone 1", "Ctrl+Alt+1", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 0);
});

registerShortcut("Move current window to Zone 2", "Move current window to Zone 2", "Ctrl+Alt+2", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 1, 0);
});

registerShortcut("Move current window to Zone 3", "Move current window to Zone 3", "Ctrl+Alt+3", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 1);
});

registerShortcut("Move current window to Zone 4", "Move current window to Zone 4", "Ctrl+Alt+4", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 1, 0, 1);
});

*/

// 2 big monitors + 2 small monitors

//*
registerShortcut("Move current window to Zone 1", "Move current window to Zone 1", "Ctrl+Alt+1", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 0);
});

registerShortcut("Move current window to Zone 2", "Move current window to Zone 2", "Ctrl+Alt+2", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 1, 0, 0);
});

registerShortcut("Move current window to Zone 3", "Move current window to Zone 3", "Ctrl+Alt+3", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 3);
});

registerShortcut("Move current window to Zone 4", "Move current window to Zone 4", "Ctrl+Alt+4", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 1, 0, 3);
});

registerShortcut("Move current window to Zone 5", "Move current window to Zone 5", "Ctrl+Alt+5", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 1);
});

registerShortcut("Move current window to Zone 6", "Move current window to Zone 6", "Ctrl+Alt+6", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 1, 0, 1);
});

registerShortcut("Move current window to Zone 7", "Move current window to Zone 7", "Ctrl+Alt+7", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 0, 0, 2);
});

registerShortcut("Move current window to Zone 8", "Move current window to Zone 8", "Ctrl+Alt+8", function() {
  moveAndResizeCurrentWindow(false, false, 1/2, 1, false, false, 1, 0, 2);
});

/* */

