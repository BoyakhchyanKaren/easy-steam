import games from './games/games.json';

export default function handler(_req, res) {
    res.status(200).json(games);
};