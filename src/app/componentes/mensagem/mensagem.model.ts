export type TipoMensagem = 'alerta' | 'info' | 'erro' | 'sucesso';

export interface Mensagem {
  mensagem: string;
  tipo: TipoMensagem;
}
