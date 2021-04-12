function findMergeNode(headA, headB) {
	if (headA == null || headB == null) return null;
	let p1 = headA;
	let p2 = headB;
	while (p1 !== p2) {
		if (p1.next == null) p1 = headB;
		else p1 = p1.next;
		if (p2.next == null) p2 = headA;
		else p2 = p2.next;
	}
	return p1.data;
}
