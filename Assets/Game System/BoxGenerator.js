#pragma strict

var interval : float;			// 상자를 생성하는 간격
var redBoxPrefab : GameObject;	// 빨간 상자의 프리팹
var blueBoxPrefab : GameObject;	// 파란 상자의 프리팹

private var nextIsRed : boolean;	// 색을 바꾸기 위한 변수
private var timer : float;			// 다음 상자를 생성할 때까지의 시간

function Start () {
	// 처음 만들 상자 예약
	nextIsRed = true;
	timer = 0.0;
}

function Update () {
	timer -= Time.deltaTime;
	if (timer < 0.0) {
		// 위치와 방향에 랜덤하게 값을 주면서 상자의 프리팹을 인스턴스화 한다.
		var offsx : float = Random.Range(-8.0, 8.0);
		var offsz : float = Random.Range(-4.0, 4.0);
		var position : Vector3 = transform.position + Vector3(offsx, 0, offsz);
		var prefab : GameObject = nextIsRed ? redBoxPrefab : blueBoxPrefab;
		Instantiate(prefab, position, Random.rotation);
		// 다음 상자 예약
		timer = interval;
		nextIsRed = !nextIsRed;
	}
}

function TimeUp() {
	enabled = false;
}

function StartGame() {
	enabled = true;
}