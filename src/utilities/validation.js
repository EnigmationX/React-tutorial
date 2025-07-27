export function isText(value){
  const _value = value.trim()
  if(value.length <= 1) throw new Error("author name not valid")
 return _value
}