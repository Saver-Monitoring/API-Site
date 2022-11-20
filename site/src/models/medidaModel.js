var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = `select top ${limite_linhas} 
                            usoRAM,  
                            usoCPU,
                            dataHora,
                            CONVERT(varchar, dataHora, 108) as momento_grafico
                            from historicoDados
                            where fkComputador = ${idAquario}
                            order by idDados desc`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select top 1
                            usoRAM,
                            usoCPU,
                            CONVERT(varchar, dataHora, 108) as momento_grafico,
                            fkComputador
                            from historicoDados where fkComputador = ${idAquario} 
                            order by idDados desc`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}