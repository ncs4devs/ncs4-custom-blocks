export function createId(id) {
  return {
    type: "CREATE",
    id: id,
  }
}

export function deleteId(id) {
  return {
    type: "DELETE",
    id: id,
  }
}
