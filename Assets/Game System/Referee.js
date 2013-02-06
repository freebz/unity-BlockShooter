#pragma strict

@script RequireComponent(Scorekeeper)	// 같은 오브젝트 내에 Scorekeeper가 필요

var switchInterval : float;		// 색 변환 간격
var rewardPoint : int;			// 올바른 색에 대한 가점
var penaltyPoint : int;			// 잘못된 색에 대한 감점
var skin : GUISkin;

private var scorekeeper : Scorekeeper;	// Scorekeeper 컴포넌트 참조
private var targetIsRed : boolean;		// 현재 타깃이 빨간색일 때 true
private var switchTimer : float;		// 색 변환까지의 시간

// 현재 타깃이 되는 색의 이름을 얻는다.
private function GetTargetColorName () : String {
	return targetIsRed ? "Red" : "Blue";
}

function Start() {
	// Scorekeeper 컴포넌트 참조
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
	// 타깃 색은 빨간색에서 시작한다.
	targetIsRed = true;
	// 최초의 색 변환까지의 시간을 설정
	switchTimer = switchInterval;
}

function Update() {
	switchTimer -= Time.deltaTime;
	if (switchTimer < 0.0) {
		// 색을 반전한다.
		targetIsRed = !targetIsRed;
		switchTimer = switchInterval;
	}
}

// 상자 파괴 통지 처리
function OnDestroyBox(boxColorName : String) {
	// 현재 타깃 색과 같으면 가점, 다르면 감점 실시
	if (boxColorName == GetTargetColorName()) {
		scorekeeper.score += rewardPoint;
	} else {
		scorekeeper.score -= penaltyPoint;
	}
}

function OnGUI() {
	GUI.skin = skin;
	// 색 변환한지 얼마 안된 경우는 표시하지 않는다.
	if (switchTimer < 1.5) return;
	// 타깃 색 이름을 대응하는 색 라벨로 표시한다.
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var message : String = "Shoot " + GetTargetColorName() + " Boxes";
	GUI.color = targetIsRed ? Color.red : Color.blue;
	GUI.Label(Rect(0, sh / 4, sw, sh / 2), message, "message");
}

function TimeUp() {
	enabled = false;
}