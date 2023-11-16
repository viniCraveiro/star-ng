export interface UBS {
    id: number;
    nome: string;
    sigla?: string;
    endereco?: {
      rua: string;
      numero: string;
      complemento: string;
      codigoPostal: string;
      estado: string;
      pais: string;
      bairro: string;
      cidade: string;
    };
  }