// There is a bug with this question in the HackerRank system. The predefined codes in Java 7, Javascript, Python 2, Python 3 are not working! Try the same solution in some other other language.

function hasCycle(head) {
	if (head == null) return null;
	let p1 = head;
	let p2 = head;
	while (p1.next && p2.next.next) {
		console.log(p1, p2);
		p1 = p1.next;
		p2 = p2.next.next;
		if (p1 == p2) {
			return 1;
		}
	}
	return 0;
}
