export interface Dia {
  id: number;
  data: string;
  horaAbertura: string;
  horaFechamento: string;
  usuarioAbertura: Usuario;
  usuarioFechamento: Usuario;
  status: Status;
}

export interface Usuario {
  id: number;
  nome: string;
  matricula: string;
  tipo: string;
}

export enum StatusNome {
  "NÃO INICIADO",
  "EM ANDAMENTO",
  "FINALIZADO"
}

export interface Status {
  id: number;
  nome: string;
}

export interface Rotina {
  id: number;
  descricao: string;
}

export interface RotinaDia {
  id: number;
  horaInicio: string | null;
  horaFim: string | null;
  usuarioInicioRotina: Usuario | null;
  usuarioFimRotina: Usuario | null;
  rotina: Rotina;
  dia: Dia;
  status: Status;
}
