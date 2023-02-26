export default {
    name: 'categories',
    type: 'document',
    title: 'Categorias',
    fields: [
    {
      name: 'name',
      title: 'Nome da Categoria',
      type: 'string',
  }, 
  {
    name: 'slug',
    title: 'Link (ex: nome-do-produto) - Sempre com letras minúsculas, sem acento, sem cedilha, sem vírgulas ou ponto, separado por traços e deve ser único',
    type: 'slug',
    opitions:{
        source: 'name',
        maxLength: 90
    }
},
    ]
  }