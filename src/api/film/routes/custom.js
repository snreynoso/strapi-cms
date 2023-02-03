module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/films/:slug',
            handler: 'film.findOne',
            config: {
                auth: false
            }
        }
    ]
}