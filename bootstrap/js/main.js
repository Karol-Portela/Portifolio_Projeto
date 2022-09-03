// Javascript do alerta do botão do html da página de contato
const alertPlaceholder = document.getElementById('divBtnAlert')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('btnAlert')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso', 'success')
  })
}
