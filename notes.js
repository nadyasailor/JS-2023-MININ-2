const noteContent = document.getElementById('title');
const addBtn = document.getElementById('add-button');
const listElement = document.getElementById('list');

// const notes = ['Go to the grocery store', 'Create a plan for Denmark trip'];

const notes = [
  {
    title: 'Go to the grocery store',
    completed: false,
  },
  {
    title: 'Create a plan for Denmark trip',
    completed: true,
  }
];

function render() {
  // for (let i = 0; i < notes.length; i++) {
  //  listElement.insertAdjacentHTML('beforeend', getNoteTemlate(notes[i]));
  // }

  for (let note of notes) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemlate(note));
  }
}

render();

addBtn.onclick = function() {
  if (noteContent.value.length === 0) {
    return;
  }
  const newNote = {
    title: noteContent.value,
    completed: false,
  }
    listElement.insertAdjacentHTML(
      'beforeend', 
      getNoteTemlate(newNote)
    );
    noteContent.value = '';
}

function getNoteTemlate(note) {
  console.log(note.completed);
  return `
      <li class="list-group-item">
        <span class="title-note">${note.title}</span>
        <span>
          <span class="btn-edit"><img src="icons/edit-icon.png" class="edit-icon"></span>
          <span class="btn-delete"><img src="icons/delete-icon.png" class="delete-icon"></span>
        </span>
      </li>
    `
}