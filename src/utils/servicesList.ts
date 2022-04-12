import EmprestimoPng from '../assets/cash.png';
import CoOwnerPng from '../assets/coowners.png';
import AssurancePng from '../assets/assurance.png';
import InvestimosPng from '../assets/informeRendimentosIcon.png';

export const servicesList = [
  { id: '1', title: 'Co-Titular', subtitle: 'Gerencie seus co-titulares.', icon: CoOwnerPng, rota: 'CoOwners' },
  { id: '2', title: 'Empréstimos', subtitle: 'Faça uma simulação', icon: EmprestimoPng, rota: 'ErrorView' },
  { id: '3', title: 'Seguros', subtitle: 'Para você e sua família', icon: AssurancePng, rota: 'ErrorView' },
  { id: '4', title: 'Investimentos', subtitle: 'Invista de maneira simples. sem burocracia.', icon: InvestimosPng, rota: 'ErrorView' },
]