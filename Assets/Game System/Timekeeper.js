#pragma strict

var gameLength : float;	// 게임 시작부터 종료까지의 길이

private var elapsed : float;	// 경과시간

function Start () {

}

function Update () {
	elapsed += Time.deltaTime;
	if (elapsed >= gameLength) {
		// 게임 오브젝트와 카메라에
		// 타임업 메시지를 송신해 정지시킨다
		BroadcastMessage("TimeUp");
		GameObject.FindWithTag("MainCamera").SendMessage("TimeUp");
		enabled = false;
	}
}

function StartGame() {
	enabled = true;
}