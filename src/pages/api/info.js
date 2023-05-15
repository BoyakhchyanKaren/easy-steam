import info from "./info/info.json";

export default function handler(_req, res) {
    res.status(200).json(info);
};