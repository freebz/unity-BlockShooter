#pragma strict

var skin : GUISkin;		// 표시에 사용하는 스킨

private var timer : float;	// 카운트다운용 타이머

function Start () {
	timer = 3.5;	// 쓰리 카운트 + 알파
}

function Update () {
	timer -= Time.deltaTime;
	if (timer <= 0.0) {
		// 게임 시작 메시지를 브로드캐스트해서 종료한다.
		BroadcastMessage("StartGame");
		enabled = false;
	}
}

function OnGUI() {
	// 쓰리 카운트 기간 중이 아니면 표시하지 않는다.
	if (timer > 3.0 || timer <= 0.0) return;
	// 쓰리 카운트를 표시한다.
	// 각 카운트에 대해 알파 블렌딩으로 페이드아웃한다.
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var text : String = Mathf.CeilToInt(timer).ToString();
	GUI.skin = skin;
	GUI.color = Color(1, 1, 1, timer - Mathf.FloorToInt(timer));
	GUI.Label(Rect(0, sh / 4, sw, sh / 2), text, "message");
}