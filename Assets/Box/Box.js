#pragma strict

var explosionPrefab : GameObject;	// 폭팔 효과

private var damaged : boolean;	// 데미지 입음
private var killTimer : float;	// 소멸까지의 시간

function Start () {

}

function Update () {
	if (!damaged) return;
	killTimer -= Time.deltaTime;
	if (killTimer <= 0.0) {
		// 효과를 내면서 자신의 게임 오브젝트 파괴
		Instantiate(explosionPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}

function ApplyDamage() {
	if (!damaged) {
		damaged = true;
		killTimer = 0.4;
	}
}