const listaDeContatos = [
    {
    id: 1,
    nome: 'Joaquim',
    ultimaMensagem: 'Olá, vamos programar?',
    horarioUltimaMensagem: '20:20',
    avatar: '/src/assets/images/jessica--drew.png'
},
{
    id: 2,
    nome: 'Maria',
    ultimaMensagem: 'Olá, quer programar?',
    horarioUltimaMensagem: '20:20',
    avatar: '/src/assets/images/jessica--drew.png'
},
{
    id: 3,
    nome: 'Joao',
    ultimaMensagem: 'Olá, sou o novo programador?',
    horarioUltimaMensagem: '20:20',
    avatar: '/src/assets/images/jessica--drew.png'
},
{
    id: 4,
    nome: 'José',
    ultimaMensagem: 'Tem café?',
    horarioUltimaMensagem: '20:20',
    avatar: '/src/assets/images/jessica--drew.png'
}
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Minha Página carregou!');

    const inputMsg = document.querySelector('#inputMensagem');
    console.log(inputMsg);
    inputMsg.placeholder = 'Digite a sua mensagem';

    const buttons = document.querySelectorAll('.cursor--pointer');
    console.log(buttons);

    const buttonsSend = document.querySelector(".cursor--pointer[src*='send']");
    console.log(buttonsSend);

    const listaMensagens = document.querySelector('.div--messages');
    console.log(listaMensagens);

    //buttonsSend.classList.add('minha--classe--modulo--um');

    const respostasParaOBot = ['Olá, tudo bem ?',
        'como você está ?',
        'Qual o seu nome ?',
        'Meu nome é O Novo Bot',
        'Quer conversar comigo ?'
    ];

    function enviarMensagem() {
        const texto = inputMsg.value.trim();
        if(texto === '') {
            alert('Digite uma mensagem primeiro!');
        } else {
            adicionarMensagem('enviada', texto);

            inputMsg.value = '';

            setTimeout(responderMensagem, 2000);
        }
        
        function responderMensagem () {
            const posicao = Math.floor( Math.random() * respostasParaOBot.length);  

            const mensagemDoBot = respostasParaOBot [posicao];
            adicionarMensagem('recebida', mensagemDoBot);

            //set Timeout -> Executa algo apenas uma vez após um intervalo de tempo
            //set interval -> Executa algo em um intervalo de tempo
        }
    }

    function adicionarMensagem(tipoMensagem, texto) {
        const menssagemElement = document.createElement('div');

        menssagemElement.classList.add('message', 'fade-in');

        if (tipoMensagem === 'enviada') {
            menssagemElement.classList.add('you');
        } else{
            menssagemElement.classList.add('other');
        }

        menssagemElement.innerText = texto;
        listaMensagens.appendChild(menssagemElement);

        setTimeout(() => {
            menssagemElement.classList.remove('fade-in')
        }, 500);
    }

    buttonsSend.addEventListener('click', () => {
        enviarMensagem();
        
    });
    inputMsg.addEventListener('keypress', (event) => {
        if (event.key === 'Enter'){
            enviarMensagem();
            
        }
    });

    function carregarContatos()
    { 
        const divContatosElement = document.querySelector('div--contacts');

        const ElementoDiv = [];

        listaDeContatos.forEach((contato)=>{
            console.log(contato);

            const divParentElement = document.createElement('div');

            const texto = `Oi ${contato.nome} legal`;
            
            divParentElement.innerHTML = `
                    <div class="flex area--contact">
                        <div class="flex justify--content--center align--items--center flex--1">
                            <img class="avatar--left--bar" src="${contato.avatar}" />
                        </div>

                        <div class="flex flex--direction--column justify--content--center flex--3">
                            <div class="flex align--items--center infos--contact">
                                <div class="font--family font--weight--bold">${contato.nome}</div>
                            </div>

                            <div class="last--message">Table for four, 5PM. Be there.</div>
                            
                        </div>

                        <div class="flex flex--direction--column justify--content--center align--items--end flex--1 div--last--messages--info">
                            <div class="hour--last--message">${contato.horariUltimaMensagem}</div>
                        </div>
                    </div>`;

                    ElementoDiv.push(divParentElement);

        });

        divContatosElement.appendChild();
    };
    carregarContatos();
});
