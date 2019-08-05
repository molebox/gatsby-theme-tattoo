export default {
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Artists Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96
            }
        },
        {
            name: 'bio',
            title: 'Biography',
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
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
              hotspot: true
            }
        }
    ]
}