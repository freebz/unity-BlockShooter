#pragma strict

@HideInInspector
var score : int;	// 스코어 값
var skin : GUISkin;

function OnGUI() {
	GUI.skin = skin;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var scoreText : String = "SCORE: " + score.ToString();
	GUI.Label(Rect(0, 0, sw / 2, sh / 4), scoreText, "score");
}