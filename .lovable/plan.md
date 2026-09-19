# Otimização completa de velocidade

## Objetivo

Reduzir o tempo até a página ficar visualmente utilizável, sobretudo no celular, preservando exatamente o design, textos, oferta, links de checkout, Pixel e interações atuais.

## Implementação

- Medir o carregamento atual em condições móveis e identificar os recursos que mais atrasam a primeira tela.
- Gerar versões WebP menores e responsivas das imagens atuais, preservando transparência e nitidez.
- Entregar ao celular apenas a resolução necessária com `srcSet` e `sizes`, sem trocar nenhuma imagem visível.
- Priorizar somente a imagem principal com preload, carregamento imediato e dimensões fixas.
- Manter todas as imagens posteriores com carregamento adiado, decodificação assíncrona e dimensões proporcionais para evitar deslocamentos.
- Adiar recursos não essenciais da parte inferior da página usando contenção nativa do navegador, sem mudar a aparência ou a ordem das seções.
- Reduzir trabalho inicial de JavaScript e animações fora da área visível, mantendo CTAs, carrosséis, FAQ e rolagem suave funcionando da mesma forma.
- Carregar o Meta Pixel sem competir com o conteúdo crítico, preservando o ID atual, o evento `PageView` e o fallback sem JavaScript.
- Melhorar a prioridade da fonte existente sem alterar a família, pesos ou aparência do texto.
- Remover somente código e recursos não utilizados que afetem o carregamento; nenhum conteúdo ou elemento visual será removido.

## Validação

- Comparar capturas antes/depois em desktop e celular para confirmar que cores, fontes, espaçamentos, layout, textos e imagens permanecem iguais.
- Testar todos os botões de rolagem, FAQ, carrosséis e os dois links de checkout.
- Confirmar o funcionamento do Meta Pixel e a ausência de erros no navegador.
- Repetir a medição em perfil móvel e revisar LCP, CLS, JavaScript e peso transferido na primeira tela.
- Buscar 90+ no Lighthouse; a pontuação final pode variar conforme rede, dispositivo e serviços externos, sem sacrificar qualidade visual ou conversão.
