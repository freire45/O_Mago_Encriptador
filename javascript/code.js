var botaoEnc = document.querySelector("#botao1");

var botaoDesc = document.querySelector("#botao2");

var botnCop = document.querySelector("#btnCop");

var textoOriginal = document.querySelector("#textoEncriptar");

var textoNovo = document.querySelector("#textoDescriptar");

escondeBotao();

botaoEnc.addEventListener("click", function(){

    textoNovo.innerHTML = textoEncriptar();

    destroiElementos();
    mostraBotao();

});

botaoDesc.addEventListener("click", function(){

    textoNovo.innerHTML = textoDescriptar();

    destroiElementos();
    mostraBotao();

});

botnCop.addEventListener("click", async function(){
    await navigator.clipboard.writeText(textoNovo.value);
});

function textoEncriptar(){

    var textinho = textoOriginal.value;
    
    var arr = Array.from(textinho);

    for(var i = 0; i < arr.length; i++){        
        if(arr[i] == 'a'){
            arr[i] = arr[i].replace('a','ai');       
        }
        if(arr[i] == "e"){
            arr[i] = arr[i].replace('e','enter');
        }
        if(arr[i] == "i"){
            arr[i] = arr[i].replace('i','imes');
        }
        if(arr[i] == "o"){
            arr[i] = arr[i].replace('o','ober');
        }
        if(arr[i] == "u"){
            arr[i] = arr[i].replace('u','ufat');
        }
    }

    var arrcon = arr.toString().replace(/\,/g, "");
    return arrcon;
}

function textoDescriptar(){
    var textinho = textoOriginal.value;
    
    var arr = Array.from(textinho);

    for(var i = 0; i < arr.length; i++){        
        if((i + 1) < arr.length && arr[i] == 'a' && arr[i + 1] == "i"){
            arr[i + 1] = arr[i + 1].replace('i','');       
        }

        if((i + 4) < arr.length && arr[i] == 'e' && arr[i + 1] == 'n' && arr[i + 2] == 't' && arr[i + 3] == 'e' && arr[i + 4] == 'r'){
            arr[i + 1] = arr[i + 1].replace('n','');
            arr[i + 2] = arr[i + 2].replace('t','');
            arr[i + 3] = arr[i + 3].replace('e','');
            arr[i + 4] = arr[i + 4].replace('r','');
        }

        if((i + 3) < arr.length && arr[i] == 'i' && arr[i + 1] == 'm' && arr[i + 2] == 'e' && arr[i + 3] == 's'){
            arr[i + 1] = arr[i + 1].replace('m','');
            arr[i + 2] = arr[i + 2].replace('e','');
            arr[i + 3] = arr[i + 3].replace('s','');
        }
        
        if((i + 3) < arr.length && arr[i] == 'o' && arr[i + 1] == 'b' && arr[i + 2] == 'e' && arr[i + 3] == 'r'){
            arr[i + 1] = arr[i + 1].replace('b','');
            arr[i + 2] = arr[i + 2].replace('e','');
            arr[i + 3] = arr[i + 3].replace('r','');
        }

        if((i + 3) < arr.length && arr[i] == 'u' && arr[i + 1] == 'f' && arr[i + 2] == 'a' && arr[i + 3] == 't'){
            arr[i + 1] = arr[i + 1].replace('f','');
            arr[i + 2] = arr[i + 2].replace('a','');
            arr[i + 3] = arr[i + 3].replace('t','');
        }
    }

    var arrcon = arr.toString().replace(/\,/g, "");
    return arrcon;
}

function destroiElementos(){

    document.getElementById('mago').remove();
    document.getElementById('aviso1').remove();
    document.getElementById('aviso2').remove();

};

function escondeBotao(){

    document.getElementById('btnCop').style.display = 'none';

}

function mostraBotao(){

    document.getElementById('btnCop').style.display = 'block';

}