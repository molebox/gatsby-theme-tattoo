export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text'
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'string'
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'string'
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'string'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
              hotspot: true
            }
        },
    ]
}