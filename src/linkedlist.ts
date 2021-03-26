import { ListNode } from './node';
export class LinkedList
{
      head: ListNode | undefined;
      constructor(h: ListNode | undefined)
      {
            this.head = h;
      }
      insertOnTail(n: ListNode)
      {
            if (this.head === undefined)
            {
                  this.head = n;
            }
            else
            {
                  let curr: ListNode = this.head!;
                  while(curr.next)
                  {
                        curr = curr.next;
                  }
                  curr.next = n;
            }
      }
      getPElementToDisplay(): HTMLParagraphElement
      {
            const p: HTMLParagraphElement = document.createElement('p');
            let str: string = "";
            let curr: ListNode | undefined = this.head!;
            while(curr)
            {
                  str += curr.value + " ---> ";
                  curr = curr.next;
            }
            str += 'undefined';
            p.textContent = str;
            return p;
      }
}