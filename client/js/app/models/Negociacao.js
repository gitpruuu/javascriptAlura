class Negociacao {
    constructor(date, quantidade, valor) {

        this._data = date;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    getVolume() {
        return `Volume: ${this._valor * this._quantidade}`;
    }

    getData() {
        return this._data
    }
    getQuantidade() {
        return this._quantidade
    }
    getValor() {
        return this._valor
    }
}