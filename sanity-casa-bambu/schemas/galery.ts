export default {
    name: 'galery',
    type: 'document',
    title: 'Galeria',
    fields: [
      {
        name: 'imagem',
        title: 'Imagem',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    {
      name: 'name',
      title: 'Nome da Imagem',
      type: 'string',
  },
    ]
  }