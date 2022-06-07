function AddLine()
{
    var click = false
    if (!click) {
        const node = document.createElement("h1");
        const textnode = document.createTextNode("Bem vindos(as)!");
        node.appendChild(textnode);
        document.querySelector("#botao").prepend(node);
        var click = true
    } else {
        document.querySelector('#botao').removeChild(document.querySelector('#botao').getElementsByTagName('h1')[0]);
    }
}
