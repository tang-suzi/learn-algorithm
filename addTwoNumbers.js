/**
 * 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0); // 哨兵节点
  let current = dummy;
  let carry = 0; // 进位
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // 新的进位
    current.next = new ListNode(sum % 10); // 每个节点保存一个位数
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummy.next;
}
