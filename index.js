// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[0,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:1}];

// implementação

function adicionarAluno(nome){

    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

    alunosDaEscola.push({ nome });
    console.log(`Aluno ${nome} cadastrado com sucesso!`);
    
    return console.log(alunosDaEscola);
    }

//     adicionarAluno("Cristian");

/* //////////////////////////////////////////////////////////////////////// */


function listarAlunos(){

    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    
   // let cursoAluno = alunosDaEscola.cursos
   // console.log(alunosDaEscola.cursos);

    let conteudo = "";
    alunosDaEscola.forEach(function(aluno){
        conteudo += `
        --------------------
        Nome do Aluno: ${aluno.nome}
        --------------------
        Notas: ${aluno.notas}
        --------------------
        Cursos: ${aluno.cursos}
        --------------------
        Faltas: ${aluno.faltas}
        `

    })
    return console.log(conteudo);
    }

    listarAlunos();  

 /* //////////////////////////////////////////////////////////////////////// */


 function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    const resultadoBusca = alunosDaEscola.find((aluno, index, array) => aluno.nome == nome );
    
    if(resultadoBusca){
        console.log(`Aluno ${nome} encontrado!`);
    }
    else{
        return console.log(`Aluno não encontrado!`);
    }
 }

 //buscarAluno();

 /* //////////////////////////////////////////////////////////////////////// */
 
 

 function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    
        
    const resultadoBusca = alunosDaEscola.find((nome, index, array) => nome.nome == aluno );
       
    if(resultadoBusca){
    const data = new Date();
    const matricular = resultadoBusca['cursos']
    matricular.push(curso, data.toLocaleDateString())
    console.log(`O aluno ${resultadoBusca.nome} foi matriculado com sucesso no curso ${resultadoBusca.cursos} (data da matrícula) `)
    }
    else{
        console.log(`Aluno não encontrado!`)
    }    

  }

//   matricularAluno("Henriq", "cozinhar");


 /* //////////////////////////////////////////////////////////////////////// */

 

 function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
   const resultadoBusca = alunosDaEscola.find((nome, index, array) => nome.nome == aluno );
   
   if(resultadoBusca){
       qtdeCursos = resultadoBusca.cursos
       if(qtdeCursos.length > 0 ){
           alunoAusente = resultadoBusca.faltas += 1;
           console.log(resultadoBusca)
           console.log(`Falta registrada com sucesso!`)
       }
       else{
           console.log(`Aluno não está matriculado em nenhum curso!`)
       }
    }

    else {
        console.log(`Aluno não encontrado!`)
    }
  
 }
// aplicarFalta("Henrique");

 /* //////////////////////////////////////////////////////////////////////// */

 
 function aplicarNota(aluno, nota){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
   const resultadoBusca = alunosDaEscola.find((nome, index, array) => nome.nome == aluno );
   
      if(resultadoBusca){
          qtdeCursos = resultadoBusca.cursos
          if(qtdeCursos.length > 0 ){
              const registrarNota = [...resultadoBusca.notas, nota];
              console.log(registrarNota)
              console.log(`Nota registrada com sucesso para o aluno ${resultadoBusca.nome}!`)
          }
          else{
              console.log(`Aluno não está matriculado em nenhum curso!`)
          }
       }
   
       else {
           console.log(`Aluno não encontrado!`)
       }
     
    }
//    aplicarNota("Henriq", 7);

 /* //////////////////////////////////////////////////////////////////////// */

   
  function aprovarAluno(aluno){
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */const resultadoBusca = alunosDaEscola.find((nome, index, array) => nome.nome == aluno );
   
    if(resultadoBusca){
        qtdeCursos = resultadoBusca.cursos
        if(qtdeCursos.length > 0 ){
            console.log(resultadoBusca)
            const somaNotas = resultadoBusca.notas.reduce((total, currentElement) => total + currentElement); 
            const media = somaNotas / resultadoBusca.notas.length;
            console.log(media)
            if(resultadoBusca.faltas <= 3 && media >= 7){
                console.log(`Aluno ${resultadoBusca.nome} aprovado!`);
            }
            else{
                console.log(`Aluno ${resultadoBusca.nome} reprovado!`);
            }
            
        }
        else{
            console.log(`Aluno não está matriculado em nenhum curso!`)          
        }
        
     }
 
    else {
         console.log(`Aluno não encontrado!`)
     }
   
  }
 // aprovarAluno("Lucca");


