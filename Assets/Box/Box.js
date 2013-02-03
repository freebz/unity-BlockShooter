#pragma strict

var explosionPrefab : GameObject;	// 폭팔 효과

function Start () {

}

function Update () {

}

function ApplyDamage() {
	// 효과를 내면서 자신의 게임 오브젝트 파괴
	Instantiate(explosionPrefab, transform.position, transform.rotation);
	Destroy(gameObject);
}