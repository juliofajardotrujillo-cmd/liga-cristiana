import { teams } from "./teams";

// Tabla de posiciones inicial (todos los equipos comienzan en 0)
export const standings = teams.map((t) => ({
  team: t,
  pj: 0,
  pg: 0,
  pe: 0,
  pp: 0,
  dg: 0,
  pts: 0,
}));

// Goleadores y asistencias: todos los jugadores inscritos, arrancando en 0.
// Ordenados de mayor a menor (goles y luego asistencias) para que sea una
// tabla de posiciones real: los 3 primeros de esta misma lista son los que
// se muestran en el podio de "Máximos Goleadores" de la página de Inicio.
export const goleadores = teams
  .flatMap((t) =>
    t.players.map((player) => ({
      jugador: player,
      equipo: t,
      goles: 0,
      asistencias: 0,
    }))
  )
  .sort((a, b) => b.goles - a.goles || b.asistencias - a.asistencias);
