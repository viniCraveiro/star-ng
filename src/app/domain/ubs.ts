export interface UBS {
    id: number;
    nome: string | null;
    sigla?: string | null;
    endereco: {
        rua: string | null;
        numero: string | null;
        complemento?: string | null;
        codigoPostal?: string | null;
        estado: string | null;
        pais: string | null;
        bairro: string | null;
        cidade: string | null;
    };
}
