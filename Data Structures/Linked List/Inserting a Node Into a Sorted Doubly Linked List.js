function sortedInsert(head, data) {
	let node = new DoublyLinkedListNode(data);
	node.next = null;
	node.prev = null;
	let ptr = head;
	if (ptr == null) return node;
	else if (ptr.data >= data) {
		node.next = ptr;
		ptr.prev = node;
		return node;
	} else {
		while (ptr.next && ptr.next.data < data) ptr = ptr.next;

		if (ptr.next == null) {
			ptr.next = node;
			node.prev = ptr;
		} else {
			node.next = ptr.next;
			node.prev = ptr;
			ptr.next.prev = node;
			ptr.next = node;
		}
		return head;
	}
}
