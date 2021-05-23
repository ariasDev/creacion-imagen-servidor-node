exports.serverAvailable = (req, res) => {
    res.status(200).json({ response: 'Server ok' })
}