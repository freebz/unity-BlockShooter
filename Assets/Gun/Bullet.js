#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (collisionInfo : Collision) {
	if (collisionInfo.gameObject.tag == "Box") {
		//Destroy(collisionInfo.gameObject);
		// 데미지 메시지를 송신한다.
		collisionInfo.gameObject.SendMessage("ApplyDamage", SendMessageOptions.DontRequireReceiver);
	}
	Destroy(gameObject);
}