function deleteNode(head, position) {
	if (position == 0) {
		head = head.next;
		return head;
	}
	let counter = 1;
	let ll = head;
	while (ll && counter < position) {
		ll = ll.next;
		counter++;
	}
	let temp = ll.next;
	ll.next = temp.next;
	return head;
}
