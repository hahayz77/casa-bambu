export default {
    name: 'banners',
    type: 'document',
    title: 'Banners',
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