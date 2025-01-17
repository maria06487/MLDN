<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <title>Descubra o número</title>
</head>
<body>
    <h4>Tente adivinhar um número entre 0 e 100!</h4>
    <script>
        // Sorteia um número entre 0 e 100
        var num = Math.round(100 * Math.random());
        var numero_digitado = 50;
        var ultimo_numero = 50;
        var tentativas = 0;

        // Enquanto não acertar o número
        while (numero_digitado != num) {
            numero_digitado = prompt("Adivinhe o número? (0-100):", ultimo_numero);
            numero_digitado = parseInt(numero_digitado); // Converte para número
            tentativas++;

            if (numero_digitado == num) break; // Se acertou, encerra

            if (numero_digitado > num)
                alert("O número é menor, tente novamente...");
            else
                alert("O número é maior, tente novamente...");

            ultimo_numero = numero_digitado;
        }

        // Exibe o resultado
        document.write("<h4>O número sorteado era: " + num + "</h4>");
        document.write("<h4>Você acertou em " + tentativas + " tentativas!</h4>");
    </script>
</body>
</html>