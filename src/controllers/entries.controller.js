const entries = [];

const renderIndex = function(require, response){
response.render('index.ejs', {entries});
};

const renderNewEntry = function(require, response){
    response.render('new-entry.ejs');
};

const creatNewEntry = function(require, response){
    const newEntry = {
        titulo: require.body.Titulo,
        Descripcion: require.body.Descripcion,
        H_Insertada: new Date(),
    };
    entries.push(newEntry);

    console.log(require.body);
    response.redirect('/');
};

module.exports = {
    renderIndex,
    renderNewEntry,
    creatNewEntry
};
