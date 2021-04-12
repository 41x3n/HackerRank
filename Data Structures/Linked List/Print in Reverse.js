function reversePrint(head) {
	if (head) {
		reversePrint(head.next);
		console.log(head.data);
	}
}
