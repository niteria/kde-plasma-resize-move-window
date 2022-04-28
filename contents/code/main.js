// based on this work:
// https://www.reddit.com/r/kde/comments/7h6g8e/move_window_to_center_patch/

// checkout KWin scipting tutorial for details:
// https://techbase.kde.org/Development/Tutorials/KWin/Scripting

// keep_width in {true, false} : change current window's width?
// keep_height in {true, false} : change current window's height?
// width_per in [0,1] : fraction of current monitor's width
// height_per in [0,1] : fraction of current monitor's height
// width_per, height_per are ignored if width_per,height_per = true
// keep_x_pos in {true,false} : move the current window in x direction?
// keep_y_pos in {true,false} : move the current window in y direction?
// x_per,y_per in [0,1] : 0 is left/top edge and 1 is right/bottom edge
// x_per,y_per is ignored if keep_x_pos,keep_y_pos = false
function moveAndResizeCurrentWindow(keep_width, keep_height, width_per, height_per, keep_x_pos = true, keep_y_pos = true, x_per = 0, y_per = 0) {
	var win = workspace.activeClient;
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

// Examples:
// resize current window to 1/3 of the screen's width
// moveAndResizeCurrentWindow(false, true 1/3, 1); 

registerShortcut("Make current window 1/3 width, full height, and left", "Set current window to 1/3 width, full height and move left", "Meta+D", function() {moveAndResizeCurrentWindow(false, false, 1/3, 1, false, false, 0, 0)});
registerShortcut("Make current window 2/3 width, full height and left", "Set current window to 2/3 width, full height and move left", "Meta+Shift+D", function() {moveAndResizeCurrentWindow(false, false, 2/3, 1, false, false, 0, 0)});
registerShortcut("Make current window 1/3 width, full height, and right", "Set current window to 1/3 width, full height and move right", "Meta+G", function() {moveAndResizeCurrentWindow(false, false, 1/3, 1, false, false, 1, 0)});
registerShortcut("Make current window 2/3 width, full height and right", "Set current window to 2/3 width, full height and move right", "Meta+Shift+G", function() {moveAndResizeCurrentWindow(false, false, 2/3, 1, false, false, 1, 0)});
registerShortcut("Make current window 1/3 width, full height, and centre", "Set current window to 1/3 width, full height and centred", "Meta+F", function() {moveAndResizeCurrentWindow(false, false, 1/3, 1, false, false, 0.5, 0)});
registerShortcut("Make current window 1/4 width, full height, and centre", "Set current window to 1/4 width, full height and centred", "Meta+Shift+F", function() {moveAndResizeCurrentWindow(false, false, 1/4, 1, false, false, 0.5, 0)});
