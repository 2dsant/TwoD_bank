export function maskPhone(value: string) {
  let formattedValue = value.replace(/\D/g, '')
  formattedValue = formattedValue.replace(/(\d{2})(\d)/, '($1) $2')
  formattedValue = formattedValue.replace(/(\d{4,5})(\d{4}).*/, '$1-$2')
  return formattedValue
}

export function maskCpf(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{3})(\d)/g, '$1.$2')
  value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
  value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
  value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})\/(\d{2})(\d)/, '$1.$2.$3-$4')
  return value.substring(0, 14)
}

export function maskCpfToSave(value: string) {
  value = value.replace('.', '')
  value = value.replace('.', '')
  value = value.replace('-', '')
  return value;
}

export function maskCep(value: string) {
  value = value.replace(/\D/g, ""); // 1239856
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  return value;
}

export function maskDate(value: string) {
  const arr = value.split('-');
  const newValue = `${arr[2]}/${arr[1]}/${arr[0]}`;
  let formattedValue;

  formattedValue = newValue.replace(/\D/g, ""); // 1239856
  formattedValue = newValue.replace(/(\d{2})(\d)/, "$1/$2")
  formattedValue = newValue.replace(/(\d{2})(\d)/, "$1/$2")
  formattedValue = newValue.replace(/(\d{4})(\d)/, "$1")

  return formattedValue.substring(0, 10)
}

export function maskDateCoOwner(value: string) {
  value = value.replace(/\D/g, ""); // 1239856
  value = value.replace(/(\d{2})(\d)/, "$1/$2")
  value = value.replace(/(\d{2})(\d)/, "$1/$2")
  value = value.replace(/(\d{4})(\d)/, "$1")

  return value.substring(0, 10)
}

export function maskCreditCard(value: string) {
  value = value.replace(/\D/g, ""); // 1239856
  value = value.replace(/(\d{4})(\d)/, "$1 $2")
  value = value.replace(/(\d{4})(\d)/, "$1 $2")
  value = value.replace(/(\d{4})(\d)/, "$1 $2")
  value = value.replace(/(\d{4})(\d)/, "$1")

  return value
}

export function maskDateToSave(value: string) {
  const arr = value.split('/');
  const newValue = `${arr[2]}-${arr[1]}-${arr[0]}`;
  console.log(newValue)

  return newValue.substring(0, 10)
}

export function noMask(value: string) {
  return value;
}

