import { focus } from './focus.js'

export const limparTela = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  operacaoAtual.textContent = ''
  const expressaoInvalida = document.querySelector('.expressaoInvalida')
  expressaoInvalida.classList.remove('displayBlock')
  expressaoInvalida.classList.add('displayNone')
  focus()
}
