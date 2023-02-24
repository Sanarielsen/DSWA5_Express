var cursos = [
  { _id: 1, nome: 'Análise e Desenvolvimento de sistemas'},
  { _id: 2, nome: 'Administração'},
  { _id: 3, nome: 'Relações Internacionais'}
]

module.exports = function() {
  var controller = {};

  controller.listaCursos = function(req, res) {
      res.json(cursos);
  },

  controller.obtemCurso = function(req, res) {

      console.log('Selecionou o curso: ' + req.params.id);
      var idCurso = req.params.id;
      var curso = cursos.filter(function(curso) {
        return curso._id == idCurso;
      })[0];      

      curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
  }

  return controller;
};


