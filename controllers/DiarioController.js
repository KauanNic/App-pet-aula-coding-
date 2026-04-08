const Diario = require('../models/diario');
 
exports.listsDiario = async (req, res) => {
 const diarios = await Diario.find();
 res.json(diarios);
}

exports.UmDiario = async (req, res) => {
 const diario = await Diario.findById(req.params.id);
 res.json(diario);
}

exports.createDiario = async (req, res) => {
    const diario = await Diario.create(req.body);
    res.status(201).json(diario);
}

exports.UpdateDiario = async (req, res) => {
    const diario = await Diario.findByIdAndUpdate(req.params.id);
    res.json(diario);
}

exports.DeleteDiario = async (req, res) => {
    const diario = await Diario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Diário removido' });

}
