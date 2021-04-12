function insertNodeAtHead(head, data) {
	if (head == null) {
		let node = new SinglyLinkedListNode(data, null);
		return node;
	}
	let node = new SinglyLinkedListNode(data);
	node.next = head;
	return node;
}
