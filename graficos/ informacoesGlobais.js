async function visualizarInformacoesGlobais() { 
    const ress = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p') 
    paragrafo.classList.add('graficos-container tsxto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em algumarede social e passam em média ${dados.tempo_medio} horas conectadas.` console.log(paragrafo) } 
    