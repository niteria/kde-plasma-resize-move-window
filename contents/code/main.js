// based on this work:
// https://www.reddit.com/r/kde/comments/7h6g8e/move_window_to_center_patch/

// checkout KWin scipting tutorial for details:
// https://techbase.kde.org/Development/Tutorials/KWin/Scripting

// width_per in [0,1] : fraction of current window's width
// height_per in [0,1] : fraction of current window's height
// keep_x_pos in {true,false} : move the current window in x direction?
// keep_y_pos in {true,false} : move the current window in y direction?
// x_per,y_per in [0,1] : 0 is left/top edge and 1 is right/bottom edge
function moveAndResizeCurrentWindow(width_per, height_per, keep_x_pos = true, keep_y_pos = true, x_per = 0, y_per = 0) {
	var win = workspace.activeClient;
    var maxArea = workspace.clientArea(KWin.MaximizeArea, win);
	var height = height_per * maxArea.height;
	var width = width_per * maxArea.width;
    var x_pos = keep_x_pos ? win.x : maxArea.x + x_per * (maxArea.width - width);
    var y_pos = keep_y_pos ? win.y : maxArea.y + y_per * (maxArea.height - height);

	win.geometry = {
		x: x_pos,  
		y: y_pos,
		width: width,
		height: height, 
	}
}

registerShortcut("Make current window 1/3 width, full height, and left", "Set current window to 1/3 width, full height and left", "Meta+D", function() {moveAndResizeCurrentWindow(1/3, 1, false, false, 0, 0)});
registerShortcut("Make current window 2/3 width, full height and left", "Set current window to 2/3 width, full height and left", "Meta+Shift+D", function() {moveAndResizeCurrentWindow(2/3, 1, false, false, 0, 0)});
registerShortcut("Make current window 1/3 width, full height, and right", "Set current window to 1/3 width, full height and right", "Meta+G", function() {moveAndResizeCurrentWindow(1/3, 1, false, false, 1, 0)});
registerShortcut("Make current window 2/3 width, full height and right", "Set current window to 2/3 width, full height and right", "Meta+Shift+G", function() {moveAndResizeCurrentWindow(2/3, 1, false, false, 1, 0)});
registerShortcut("Make current window 1/3 width, full height, and centre", "Set current window to 1/3 width, full height and centre", "Meta+F", function() {moveAndResizeCurrentWindow(1/3, 1, false, false, 0.5, 0)});
registerShortcut("Make current window 1/4 width, full height, and centre", "Set current window to 1/4 width, full height and centre", "Meta+Shift+F", function() {moveAndResizeCurrentWindow(1/4, 1, false, false, 0.5, 0)});
