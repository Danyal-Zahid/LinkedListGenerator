export class ListNode
{
      value: string;
      next: ListNode | undefined;
      constructor(v: string, n: ListNode | undefined)
      {
            this.value = v;
            this.next = n;
      }
}