/* EVENTOS

São ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interaticas e
dinâmicas.

Existem muitos eventos, veja os mais utilizados:


onclick => disparado quando recebe um click

ondblclick => disparado quando recebe click duplo

onmouseover => disparado quando o mouse está sobre

onmouseout => disparado quando o mouse é movido para fora do elemento

onmousemove => disparado quando o mouse é movido no elemento

onmousedown => disparado quando o click do botão foi pressionado

onmouseup => disparado quando o click do botão é liberado

onfocus => disparado quando o elemento recebe o foco, valido para input, 

onchange => disparado quando existe uma mudança no conteúdo. "ao mudar"

onblur => disparado quando o elemento perde o foco

onkeydown => disparado quando uma tecla é pressionada

onkeypress => disparado quando uma tecla é pressionada e solta

onkeyup => disparado quando uma tecla é solta sobre um elemento

onload => disparada quando a página terminou de ser carregada. Body

onresize => disparado quando há um redirecionamento da janela

*/

function eventoClick() {
    //alert("OnClick ativado!");
    document.body.style.backgroundColor = "lightgray";
}

function eventoDblClick() {
    alert("Ondblclick ativado!");
}

function viraVermelho() {
    let div = document.getElementById("bloco");
    div.style.backgroundColor = "red";

}

function viraAzul() {
    let div = document.getElementById("bloco");
    div.style.backgroundColor = "blue";

}

/*function adicionaTexto() {
    let p = document.getElementById("texto");
    p.append('O mouse se moveu<br>'); // adiciona
}*/

function limpaTexto() {
    document.getElementById("campotexto").value = "";
}

function mudou() {
    console.log("Mudou");
}