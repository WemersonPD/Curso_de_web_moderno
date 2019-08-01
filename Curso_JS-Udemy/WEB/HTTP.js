

/**
 * -Requisição via GET
 * -Definição:
 *      -Os parametros vão na propria URL
 *      -Primeiro é expecificado o Get local desejado de certa url  HTTT/1.1;
 *      -Segundo: o Host (URL) onde está a nossa request
 *      
 *      -mecanismo?comando
 *      -comando&comando
 * 
 * 
 * EX1: 
 * GET /index.html HTTP/1.1
 * Host: www.exemplo.com
 * (É a requisição para: www.exemplo.com/index.html)
 * 
 * Resposta do servidor:
 * HTTP/1.1 200 OK  
    Date: Mon, 23 May 2005 22:38:34 GMT
    Server: Apache/1.3.27 (Unix)  (Red-Hat/Linux)
    Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
    Etag: "3f80f-1b6-3e1cb03b"
    Accept-Ranges: bytes
    Content-Length: 438
    Connection: close
    Content-Type: text/html; charset=UTF-8
 * 
 * EX2: 
 * GET /search?q=web+moderno&hl=pt-BR HTTP/1.1 (Request, apontando pra uma parte expecifica do host)
 * Host: www.google.com (Url, no qual vai ser achado nossa request)
 * (É a requisição para: https://www.google.com/search?q=web+moderno&hl=pt-BR)
 *  
 * 
 * 
 * -Explicação:
 *      -?q=web+moderno (Significa a consulta que vou fazer em cima do serviço search do google)
 *      -&hl=pt-BR (Host language)  (Lingua do host = pt-BR)
 *  
  */



/* -Request post
 *      -Parametros não ficam na url 
 *      -Oferece maior segurança 
 *      
 * 
 * 
 * 
 * 
 * 
 * 
 */


 /** -Grupos de status:
  *      -Grupo 1xx: Informação;
  *      -Grupo 2xx: Sucesso;
  *      -Grupo 3xx: Redirecionamento;
  *      -Grupo 4xx: Erro no client;
  *      -Grupo 5xx: Erro no servidor;
  * 
  * 
  * 
  * 
  * */






