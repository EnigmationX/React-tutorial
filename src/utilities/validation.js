export function isText(value){
  const _value = value.trim()
  if(value.length <= 1) return false;
 return _value
}
export  function IsNumber(value){
    const _value = typeof value === typeof 0? true:false
    return _value
} 