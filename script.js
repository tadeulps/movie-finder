let id=[];
const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
promessa.then(popularFilmes);

function popularFilmes(resposta) {
  console.log(resposta.data)
	filmes=resposta.data;
  colocarFilmes()
}


function colocarFilmes(){
  const ulfilmes=document.querySelector(".movies");
  ulfilmes.innerHTML+="";

  for(let i=0; i<filmes.length;i++){
    ulfilmes.innerHTML+=`<div class="movie">
    <img src="${filmes[i].imagem}">
    <div class="title">${filmes[i].titulo}</div>
    <button onclick="compra(${filmes[i].id})">
      Comprar
      <ion-icon name="cart-outline"></ion-icon>
    </button>
  </div>`;
    id.push(filmes[i].id)
  }

}

function compra(id){
  let nome=prompt("Qual seu nome");
  let quantidade=prompt("Quantos assentos?");
  let dados={
    nome: nome,
    quantidade: quantidade}
  ;
  const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`, dados);
  requisicao.then(tratarSucesso);
  requisicao.catch(tratarError);

  function tratarSucesso(){
    alert("Compra feita com sucesso")
  }
  function tratarError(){
    alert("Erro inesperado na compra")
  }
}
