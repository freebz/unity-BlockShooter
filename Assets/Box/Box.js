#pragma strict

var explosionPrefab : GameObject;	// 폭팔 효과
var colorName : String;				// 상자의 색 이름

private var damaged : boolean;	// 데미지 입음
private var killTimer : float;	// 소멸까지의 시간

function Start () {

}

function Update () {
	if (!damaged) return;
	killTimer -= Time.deltaTime;
	if (killTimer <= 0.0) {
		// 상자 파괴 GameController에 통지
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBox", colorName);
		// 효과를 내면서 자신의 게임 오브젝트 파괴
		Instantiate(explosionPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}

function ApplyDamage() {
	if (!damaged) {
		damaged = true;
		killTimer = 0.4;
		rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
	}
}