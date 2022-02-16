const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function nth_node(head, n) {
  var a = head;
  var b = head;
  var count = 0;
  while (b != null) {
    count++;
    if (count - n > 0) a = a.next;
    b = b.next;
  }
  return a.data;
}
