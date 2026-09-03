export type Categoria = "Ornamentais" | "Frutíferas" | "Nativas";
export type Formato = "Plântula in vitro" | "Planta aclimatada";
export type Status = "Disponível" | "Sob consulta" | "Programação futura";

export interface Produto {
  slug: string;
  nome: string;
  cientifico: string;
  categoria: Categoria;
  formato: Formato;
  disponibilidade: number | null;
  prazoDias: number | null;
  status: Status;
}

/**
 * Dados mockados estruturados — substituíveis por API/banco de dados
 * sem alteração dos componentes de catálogo.
 */
export const produtos: Produto[] = [
  {
    slug: "ipe-amarelo",
    nome: "Ipê-amarelo",
    cientifico: "Handroanthus chrysotrichus",
    categoria: "Nativas",
    formato: "Planta aclimatada",
    disponibilidade: 20000,
    prazoDias: 45,
    status: "Disponível",
  },
  {
    slug: "ipe-roxo",
    nome: "Ipê-roxo",
    cientifico: "Handroanthus impetiginosus",
    categoria: "Nativas",
    formato: "Planta aclimatada",
    disponibilidade: 12000,
    prazoDias: 60,
    status: "Disponível",
  },
  {
    slug: "jatoba",
    nome: "Jatobá",
    cientifico: "Hymenaea courbaril",
    categoria: "Nativas",
    formato: "Planta aclimatada",
    disponibilidade: null,
    prazoDias: 90,
    status: "Programação futura",
  },
  {
    slug: "aroeira-pimenteira",
    nome: "Aroeira-pimenteira",
    cientifico: "Schinus terebinthifolia",
    categoria: "Nativas",
    formato: "Plântula in vitro",
    disponibilidade: 35000,
    prazoDias: 30,
    status: "Disponível",
  },
  {
    slug: "bananeira",
    nome: "Bananeira Prata-anã",
    cientifico: "Musa acuminata × balbisiana",
    categoria: "Frutíferas",
    formato: "Plântula in vitro",
    disponibilidade: 80000,
    prazoDias: 40,
    status: "Disponível",
  },
  {
    slug: "abacaxi",
    nome: "Abacaxi Pérola",
    cientifico: "Ananas comosus",
    categoria: "Frutíferas",
    formato: "Plântula in vitro",
    disponibilidade: 50000,
    prazoDias: 35,
    status: "Disponível",
  },
  {
    slug: "mirtilo",
    nome: "Mirtilo",
    cientifico: "Vaccinium corymbosum",
    categoria: "Frutíferas",
    formato: "Planta aclimatada",
    disponibilidade: null,
    prazoDias: null,
    status: "Sob consulta",
  },
  {
    slug: "morango",
    nome: "Morangueiro",
    cientifico: "Fragaria × ananassa",
    categoria: "Frutíferas",
    formato: "Plântula in vitro",
    disponibilidade: 120000,
    prazoDias: 30,
    status: "Disponível",
  },
  {
    slug: "spathiphyllum",
    nome: "Lírio-da-paz",
    cientifico: "Spathiphyllum wallisii",
    categoria: "Ornamentais",
    formato: "Planta aclimatada",
    disponibilidade: 25000,
    prazoDias: 25,
    status: "Disponível",
  },
  {
    slug: "zamioculca",
    nome: "Zamioculca",
    cientifico: "Zamioculcas zamiifolia",
    categoria: "Ornamentais",
    formato: "Plântula in vitro",
    disponibilidade: 18000,
    prazoDias: 45,
    status: "Disponível",
  },
  {
    slug: "philodendron",
    nome: "Philodendron",
    cientifico: "Philodendron hederaceum",
    categoria: "Ornamentais",
    formato: "Planta aclimatada",
    disponibilidade: null,
    prazoDias: 55,
    status: "Programação futura",
  },
  {
    slug: "agapanto",
    nome: "Agapanto",
    cientifico: "Agapanthus africanus",
    categoria: "Ornamentais",
    formato: "Planta aclimatada",
    disponibilidade: 9000,
    prazoDias: 40,
    status: "Sob consulta",
  },
];

export const categorias: Categoria[] = ["Ornamentais", "Frutíferas", "Nativas"];
export const formatos: Formato[] = ["Plântula in vitro", "Planta aclimatada"];
export const statusList: Status[] = ["Disponível", "Sob consulta", "Programação futura"];

export function formatQtd(n: number | null) {
  return n === null ? "Sob consulta" : `${n.toLocaleString("pt-BR")} un.`;
}

export function formatPrazo(d: number | null) {
  return d === null ? "A definir" : `${d} dias`;
}

export const WHATSAPP_NUMBER = "5511999999999";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MSG =
  "Olá. Vim pelo site da Anevena e gostaria de consultar disponibilidade.";
