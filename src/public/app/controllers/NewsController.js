class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('ANN');
    }
}

module.exports = new NewsController;