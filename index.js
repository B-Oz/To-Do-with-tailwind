const input = document.querySelector("input");
const button = document.querySelector("button");
const deleteButton = document.querySelectorAll(".body")[0];
const ul = document.querySelector("ul");
const body = document.querySelector("body");

const addTodo = (e) => {
  const newTodo = input.value.trim();
  if (newTodo === "") {
    console.log("başarısız");
  } else if (e.key === "Enter" || e.key === undefined) {
    console.log("başarılı");
    addTodoUI(newTodo);
  }
};

const deleteTodo = (e) => {
  if (e.target.className === "fa-sharp fa-solid fa-trash p-2") {
    e.target.parentElement.parentElement.remove();
  }
};

const addTodoUI = (newTodo) => {
  const listItem = document.createElement("li");
  const pa = document.createElement("p");
  pa.className = "hover:scale-125 cursor-pointer";
  pa.innerHTML = `<i id="a" class="fa-sharp fa-solid fa-trash p-2"></i>`;
  listItem.className =
    "border flex justify-between items-center w-full px-[1rem] min-h-[2.5rem] rounded-lg shadow-lg ";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(pa);
  ul.appendChild(listItem);
  input.value == "";
  input.focus();
};

input.addEventListener("keyup", addTodo);
button.addEventListener("click", addTodo);
deleteButton.addEventListener("click", deleteTodo);
