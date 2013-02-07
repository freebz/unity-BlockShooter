#pragma strict

var skin : GUISkin;		// 표시에 사용하는 스킨

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		Application.LoadLevel("Main");
	}
}

function OnGUI() {
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.skin = skin;
	GUI.Label(Rect(0, 0, sw, sh), "B L O C K S H O O T E R", "message");
	GUI.Label(Rect(0, sh / 2, sw, sh / 2), "Click to Start", "message");
}