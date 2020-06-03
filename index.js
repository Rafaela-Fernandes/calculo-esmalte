
$(document).ready(function () {

    $('#bt-01, #bt-02').change(function () {
        let bt_01 = $('#bt-01').val();
        let bt_02 = $('#bt-02').val();
        var totalBitola = 1 / ((parseInt(bt_01) * parseInt(bt_02)) / 10000);


        if (bt_01 && bt_02 == 10) {

            let total10X10 = parseInt(totalBitola) + 4
            if (total10X10 >= 0) {
                $('.total-geral').toggle();
                $('.qtd').text(total10X10.toFixed(2));
            }

        } else {
            if (totalBitola >= 0) {
                $('.total-geral').toggle();
                $('.qtd').text(totalBitola.toFixed(2));
            }


        }
    })

    $('#btn-calcular').click(function (event) {
        event.preventDefault();
        let camada = $('#camada').val();
        let pesoSeco = $('#peso-seco').val();
        let perda = $('#perda').val();
        let metros = $('#metros').val();

        let totalBitola = $('.qtd').text();

        // calculo parte 01

        let cal_01 = parseFloat(totalBitola) * camada * (pesoSeco / 100);
        let cal_02 = cal_01 + (cal_01 / 10);
        let totalGeral = (cal_02 / 1000) * metros;

        $('.total-geral').text(totalGeral);

    })

    $('#btn-limpar').click(function () {
        $("#form input").val('');
        $('.total-geral').text('');
        $('.qtd').text('');
    })
})