import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        interstellar: resolve(__dirname, 'pages/interstellar.html'),
        harryPotter: resolve(__dirname, 'pages/harry-potter-chambre-des-secrets.html'),
        superman: resolve(__dirname, 'pages/superman.html'),
        leParrain: resolve(__dirname, 'pages/le-parrain.html'),
        conjuring: resolve(__dirname, 'pages/conjuring-heure-du-jugement.html'),
        darkKnight: resolve(__dirname, 'pages/dark-knight.html'),
        fightClub: resolve(__dirname, 'pages/fight-club.html'),
        lesEvades: resolve(__dirname, 'pages/les-evades.html')
      }
    }
  }
});