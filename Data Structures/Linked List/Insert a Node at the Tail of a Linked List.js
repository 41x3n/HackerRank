function insertNodeAtTail(head, data) {
	if (head == null) {
		let node = new SinglyLinkedListNode(data, null);
		return node;
	}
	let node = new SinglyLinkedListNode(data, null);
	let oldHead = head;
	while (head.next) head = head.next;
	head.next = node;
	return oldHead;
}
