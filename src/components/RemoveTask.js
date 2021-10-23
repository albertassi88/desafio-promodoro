export default function RemoveTask(index, setListTasks, listTasks) {
  let newTasks = [...listTasks]
  newTasks.splice(index, 1)
  setListTasks(newTasks)
}