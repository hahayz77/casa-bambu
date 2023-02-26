export default {
    name: 'products',
    type: 'document', 
    title: 'Produtos',
    initialValue: {
        qty: 1,
        discount: 0,
      },
    fields:[
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Nome do produto',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Link (ex: nome-do-produto) - Sempre com letras minúsculas, separado por traços e deve ser único',
            type: 'slug',
            opitions:{
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Preço',
            type: 'number',
            validation: (Rule: { positive: () => { (): any; new(): any; precision: { (arg0: number): any; new(): any; }; }; })  => Rule.positive().precision(2)
        },
        {
            name: 'discount',
            title: 'Desconto (ex: 50) - É igual a 50% de desconto',
            type: 'number',
            validation: (Rule: { positive: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.positive().max(100)
        },
        {
            name: 'qty',
            title: 'Quantity',
            type: 'number',
            hidden: true
        },
        {
            name: 'details',
            title: 'Detalhes - Detalhes importantes sobre o produto',
            type: 'string'
        },
        {
            name: 'categories',
            title: 'Categorias (ex: aromas, difusores) - Separados por vírgula e com letras minúsculas (Consultar Link da Categoria)',
            type: 'string'
        }
    ]
}