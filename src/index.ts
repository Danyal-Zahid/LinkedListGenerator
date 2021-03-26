import  { ListNode } from './node';
import  { LinkedList } from './linkedlist';
// import { formData } from './forms';

const form = document.querySelector('form')!;
const list = new LinkedList(undefined);
form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('#new-element')!;
      list.insertOnTail(new ListNode((input as HTMLInputElement).value, undefined));
      (input as HTMLInputElement).value = '';
      updateUI();
});

function updateUI()
{
      const list_ui= document.querySelector('#linked-list')!;
      list_ui.innerHTML = '';
      list_ui.appendChild(list.getPElementToDisplay());
}

const about_btn = document.getElementById('about-button');
about_btn?.addEventListener('click', () => {
      const about = document.getElementById('about');
      if (about)
            about.style.display = about.style.display === 'none'? 'block': 'none';
});

const home_btn = document.getElementById('home-button');
home_btn?.addEventListener('click', () => {
      list.head = undefined;
      updateUI();
});
// const p: any = {};
// p.speak();





