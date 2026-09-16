# Otimização completa de performance

## Auditoria inicial

Principais gargalos encontrados, em ordem de impacto:

1. **Imagens pesadas e maiores que a exibição** — as 20 imagens usadas somam cerca de **10,4 MB únicos**; as PNG transparentes principais chegam a **1,47–1,71 MB cada**, e as imagens dos carrosséis têm **1414×2000 px** mesmo quando aparecem com poucas centenas de pixels.
2. **Imagens abaixo da primeira tela carregadas cedo** — a imagem “Tudo o que você vai receber”, os quatro bônus e as duas ofertas não têm carregamento adiado.
3. **Ausência de dimensões explícitas** — todas as imagens principais, bônus e ofertas não possuem `width` e `height`, aumentando o risco de deslocamentos durante o carregamento.
4. **Imagem principal sem prioridade explícita** — o navegador não recebe preload, `fetchPriority="high"` nem decodificação prioritária para a imagem que domina a primeira tela.
5. **Pixel carregado imediatamente** — o script externo do Meta Pixel compete com os recursos visíveis no início. Ele será adiado sem remover o rastreamento de PageView nem o fallback.
6. **Conteúdo muito abaixo da tela ainda participa do trabalho inicial de renderização** — seções extensas podem usar contenção nativa do navegador sem mudar sua aparência.
7. **JavaScript inicial evitável** — a data da faixa superior é preenchida após a montagem, e o provedor global de dados não é necessário nesta página estática.
8. **Fonte externa** — o arquivo da fonte depende de uma conexão externa; manteremos a tipografia e melhoraremos apenas sua prioridade/conexão.

A medição local em modo de desenvolvimento registrou **FCP ~752 ms e 179 requisições**, mas inclui módulos e ferramentas exclusivas do ambiente de edição. A comparação final será feita no mesmo ambiente e complementada por uma validação visual e de rede.

## Implementação

- Gerar variantes **WebP otimizadas e redimensionadas** para fotografias e mockups sem transparência; para PNGs transparentes, gerar WebP preservando o canal alfa e a qualidade visual.
- Criar tamanhos adequados para celular e desktop e usar `srcSet`/`sizes`, evitando baixar pixels desnecessários.
- Manter a imagem principal sem lazy loading, com `fetchPriority="high"`, preload e dimensões fixas.
- Aplicar `loading="lazy"` e `decoding="async"` em todas as imagens abaixo da primeira tela.
- Adicionar `width` e `height` proporcionais em todas as imagens para estabilizar o layout.
- Adiar o Meta Pixel até o navegador ficar ocioso ou após a primeira interação, mantendo o ID, PageView e fallback atuais.
- Aplicar `content-visibility: auto` às seções distantes, com tamanho intrínseco estimado para evitar mudanças visuais.
- Remover estado/efeito desnecessário da data e simplificar o JavaScript inicial sem alterar os textos ou interações.
- Preservar a divisão automática de código já fornecida pela página e evitar fragmentações que criariam novas cascatas de rede.
- Remover apenas imports/código realmente não utilizados no caminho carregado, sem alterar componentes visuais ou dependências de ferramentas existentes.

## Validação final

- Comparar capturas antes/depois em desktop e celular para confirmar que layout, cores, fontes, espaçamentos, textos e imagens continuam visualmente iguais.
- Confirmar funcionamento de todos os botões, rolagem para oferta, FAQs, links dos dois checkouts e Meta Pixel.
- Repetir a medição de carregamento, conferir quantidade/peso de imagens baixadas na primeira tela, deslocamento visual, erros e recursos bloqueadores.
- Corrigir os maiores problemas restantes e registrar os ganhos. A meta será 90+ no Lighthouse; a pontuação exata pode variar com rede, dispositivo e resposta de serviços externos.
