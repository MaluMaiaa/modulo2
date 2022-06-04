function AddLine()
{
    var click = false
    if (!click) {
        const node = document.createElement("h1");
        const textnode = document.createTextNode("Bem vindos(as)!");
        node.appendChild(textnode);
        $(document).getElementById("botao").prepend(node);
        var click = true
    } else {
        document.getElementById('botao').removeChild(document.getElementById('botao').getElementsByTagName('h1')[0]);
    }
}
