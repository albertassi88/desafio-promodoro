export default function RemoveTask(index, setArray, array) {
  let newTasks = [...array]
  newTasks.splice(index, 1)
  setArray(newTasks)
}